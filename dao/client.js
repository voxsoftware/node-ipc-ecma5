'use strict';

var net = require('net'),
    tls = require('tls'),
    eventParser = require('./eventParser.js'),
    Pubsub = require('event-pubsub'),
    Message = require('js-message'),
    fs = require('fs'),
    Queue = require('js-queue');

function init(config, log) {
    var client = {
        config: config,
        queue: new Queue(),
        socket: false,
        connect: connect,
        emit: emit,
        log: log,
        retriesRemaining: config.maxRetries || 0
    };

    new Pubsub(client);

    return client;
}

function emit(type, data) {
    this.log('dispatching event to '.debug, this.id.variable, this.path.variable, ' : ', type.data, ',', data);

    var message = new Message();
    message.type = type;
    message.data = data;

    if (this.config.rawBuffer) {
        message = new Buffer(type, this.encoding);
    } else {
        message = eventParser.format(message);
    }

    if (!this.config.sync) {
        this.socket.write(message);
        return;
    }

    this.queue.add(syncEmit.bind(this, message));
}

function syncEmit(message) {
    this.log('dispatching event to '.debug, this.id.variable, this.path.variable, ' : ', message.data);
    this.socket.write(message);
}

function connect() {
    //init client object for scope persistance especially inside of socket events.
    var client = this;

    client.log('requested connection to '.debug, client.id.variable, client.path.variable);
    if (!this.path) {
        client.log('\n\n######\nerror: '.error, client.id.info, ' client has not specified socket path it wishes to connect to.'.error);
        return;
    }

    if (!client.port) {
        client.log('Connecting client on Unix Socket :'.debug, client.path.variable);

        var path = client.path;

        if (process.platform === 'win32' && !client.path.startsWith('\\\\.\\pipe\\')) {
            path = path.replace(/^\//, '');
            path = path.replace(/\//g, '-');
            path = '\\\\.\\pipe\\' + path;
        }
        client.socket = net.connect({
            path: path
        });
    } else {
        if (!client.config.tls) {
            client.log('Connecting client via TCP to'.debug, client.path.variable, client.port);
            client.socket = net.connect({
                port: client.port,
                host: client.path
            });
        } else {
            client.log('Connecting client via TLS to'.debug, client.path.variable, client.port, client.config.tls);
            if (client.config.tls.private) {
                client.config.tls.key = fs.readFileSync(client.config.tls.private);
            }
            if (client.config.tls.public) {
                client.config.tls.cert = fs.readFileSync(client.config.tls.public);
            }
            if (client.config.tls.trustedConnections) {
                if (typeof client.config.tls.trustedConnections === 'string') {
                    client.config.tls.trustedConnections = [client.config.tls.trustedConnections];
                }
                client.config.tls.ca = [];
                for (var i = 0; i < client.config.tls.trustedConnections.length; i++) {
                    client.config.tls.ca.push(fs.readFileSync(client.config.tls.trustedConnections[i]));
                }
            }

            client.config.tls.host = client.path;
            client.config.tls.port = client.port;

            client.socket = tls.connect(client.config.tls);
        }
    }

    client.socket.setEncoding(this.config.encoding);

    client.socket.on('error', function (err) {
        client.log('\n\n######\nerror: '.error, err);
        client.trigger('error', err);
    });

    client.socket.on('connect', function connectionMade() {
        client.trigger('connect');
        client.retriesRemaining = client.config.maxRetries;
        client.log('retrying reset');
    });

    client.socket.on('close', function connectionClosed() {
        client.log('connection closed'.notice, client.id.variable, client.path.variable, client.retriesRemaining + ' tries remaining of ' + client.config.maxRetries);

        if (client.config.stopRetrying || client.retriesRemaining < 1) {
            client.trigger('disconnect');
            client.log(client.config.id.variable, 'exceeded connection rety amount of'.warn, ' or stopRetrying flag set.');

            client.socket.destroy();
            client.trigger('destroy');
            client = undefined;

            return;
        }

        client.isRetrying = true;

        setTimeout(function retryTimeout() {
            client.retriesRemaining--;
            client.isRetrying = false;
            client.connect();
            setTimeout(function resetRetriesCheck() {
                if (!client.isRetrying) {
                    client.retriesRemaining = client.config.maxRetries;
                }
            }, 100);
        }.bind(null, client), client.config.retry);

        client.trigger('disconnect');
    });

    client.socket.on('data', function (data) {
        client.log('## recieved events ##'.rainbow);
        if (client.config.rawBuffer) {
            client.trigger('data', new Buffer(data, this.encoding));
            if (!client.config.sync) {
                return;
            }

            client.queue.next();
            return;
        }

        if (!this.ipcBuffer) {
            this.ipcBuffer = '';
        }

        data = this.ipcBuffer += data;

        if (data.slice(-1) != eventParser.delimiter || data.indexOf(eventParser.delimiter) == -1) {
            client.log('Implementing larger buffer for this socket message. You may want to consider smaller messages'.notice);
            return;
        }

        this.ipcBuffer = '';

        var events = eventParser.parse(data);
        var eCount = events.length;
        for (var i = 0; i < eCount; i++) {
            var message = new Message();
            message.load(events[i]);

            client.log('detected event of type '.debug, message.type.data, message.data);
            client.trigger(message.type, message.data);
        }

        if (!client.config.sync) {
            return;
        }

        client.queue.next();
    });
}

module.exports = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGUtaXBjL2Rhby9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTSxNQUFNLFFBQVEsS0FBUixDQUFOO0lBQ0YsTUFBTSxRQUFRLEtBQVIsQ0FBTjtJQUNBLGNBQWMsUUFBUSxrQkFBUixDQUFkO0lBQ0EsU0FBUyxRQUFRLGNBQVIsQ0FBVDtJQUNBLFVBQVUsUUFBUSxZQUFSLENBQVY7SUFDQSxLQUFLLFFBQVEsSUFBUixDQUFMO0lBQ0EsUUFBUSxRQUFRLFVBQVIsQ0FBUjs7QUFFSixTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXFCLEdBQXJCLEVBQXlCO0FBQ3JCLFFBQUksU0FBTztBQUNQLGdCQUFVLE1BQVY7QUFDQSxlQUFVLElBQUksS0FBSixFQUFWO0FBQ0EsZ0JBQVUsS0FBVjtBQUNBLGlCQUFVLE9BQVY7QUFDQSxjQUFVLElBQVY7QUFDQSxhQUFVLEdBQVY7QUFDQSwwQkFBaUIsT0FBTyxVQUFQLElBQW1CLENBQW5CO0tBUGpCLENBRGlCOztBQVdyQixRQUFJLE1BQUosQ0FBVyxNQUFYLEVBWHFCOztBQWFyQixXQUFPLE1BQVAsQ0FicUI7Q0FBekI7O0FBZ0JBLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBbUIsSUFBbkIsRUFBd0I7QUFDcEIsU0FBSyxHQUFMLENBQVMsd0JBQXdCLEtBQXhCLEVBQStCLElBQUMsQ0FBSyxFQUFMLENBQVMsUUFBVixFQUFvQixLQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW1CLEtBQS9FLEVBQXNGLEtBQUssSUFBTCxFQUFVLEdBQWhHLEVBQXFHLElBQXJHLEVBRG9COztBQUdwQixRQUFJLFVBQVEsSUFBSSxPQUFKLEVBQVIsQ0FIZ0I7QUFJcEIsWUFBUSxJQUFSLEdBQWEsSUFBYixDQUpvQjtBQUtwQixZQUFRLElBQVIsR0FBYSxJQUFiLENBTG9COztBQU9wQixRQUFHLEtBQUssTUFBTCxDQUFZLFNBQVosRUFBc0I7QUFDckIsa0JBQVEsSUFBSSxNQUFKLENBQVcsSUFB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UCxDQUFXLGdHQUFnRyxNQUFoRyxDQUFYLENBRGtGO0FBRWxGLG1CQUZrRjtTQUF0Rjs7QUFLQSxhQUFLLFNBQUwsR0FBZSxFQUFmLENBMUJXOztBQTRCWCxZQUFNLFNBQVMsWUFBWSxLQUFaLENBQWtCLElBQWxCLENBQVQsQ0E1Qks7QUE2QlgsWUFBTSxTQUFTLE9BQU8sTUFBUCxDQTdCSjtBQThCWCxhQUFJLElBQUksSUFBRSxDQUFGLEVBQUssSUFBRSxNQUFGLEVBQVUsR0FBdkIsRUFBMkI7QUFDdkIsZ0JBQUksVUFBUSxJQUFJLE9BQUosRUFBUixDQURtQjtBQUV2QixvQkFBUSxJQUFSLENBQWEsT0FBTyxDQUFQLENBQWIsRUFGdUI7O0FBSXZCLG1CQUFPLEdBQVAsQ0FBVywwQkFBMEIsS0FBMUIsRUFBaUMsUUFBUSxJQUFSLENBQWEsSUFBYixFQUFtQixRQUFRLElBQVIsQ0FBL0QsQ0FKdUI7QUFLdkIsbUJBQU8sT0FBUCxDQUNHLFFBQVEsSUFBUixFQUNBLFFBQVEsSUFBUixDQUZILENBTHVCO1NBQTNCOztBQVdBLFlBQUcsQ0FBQyxPQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW1CO0FBQ25CLG1CQURtQjtTQUF2Qjs7QUFJQSxlQUFPLEtBQVAsQ0FBYSxJQUFiLEdBN0NXO0tBQWYsQ0FGSixDQW5JYztDQUFsQjs7QUF1TEEsT0FBTyxPQUFQLEdBQWUsSUFBZiIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5ldCA9IHJlcXVpcmUoJ25ldCcpLFxuICAgIHRscyA9IHJlcXVpcmUoJ3RscycpLFxuICAgIGV2ZW50UGFyc2VyID0gcmVxdWlyZSgnLi9ldmVudFBhcnNlci5qcycpLFxuICAgIFB1YnN1YiA9IHJlcXVpcmUoJ2V2ZW50LXB1YnN1YicpLFxuICAgIE1lc3NhZ2UgPSByZXF1aXJlKCdqcy1tZXNzYWdlJyksXG4gICAgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnanMtcXVldWUnKTtcblxuZnVuY3Rpb24gaW5pdChjb25maWcsbG9nKXtcbiAgICBsZXQgY2xpZW50PXtcbiAgICAgICAgY29uZmlnICA6IGNvbmZpZyxcbiAgICAgICAgcXVldWUgICA6IG5ldyBRdWV1ZSxcbiAgICAgICAgc29ja2V0ICA6IGZhbHNlLFxuICAgICAgICBjb25uZWN0IDogY29ubmVjdCxcbiAgICAgICAgZW1pdCAgICA6IGVtaXQsXG4gICAgICAgIGxvZyAgICAgOiBsb2csXG4gICAgICAgIHJldHJpZXNSZW1haW5pbmc6Y29uZmlnLm1heFJldHJpZXN8fDBcbiAgICB9O1xuXG4gICAgbmV3IFB1YnN1YihjbGllbnQpO1xuXG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxuZnVuY3Rpb24gZW1pdCh0eXBlLGRhdGEpe1xuICAgIHRoaXMubG9nKCdkaXNwYXRjaGluZyBldmVudCB0byAnLmRlYnVnLCAodGhpcy5pZCkudmFyaWFibGUsIHRoaXMucGF0aC52YXJpYWJsZSwnIDogJywgdHlwZS5kYXRhLCcsJywgZGF0YSk7XG5cbiAgICBsZXQgbWVzc2FnZT1uZXcgTWVzc2FnZTtcbiAgICBtZXNzYWdlLnR5cGU9dHlwZTtcbiAgICBtZXNzYWdlLmRhdGE9ZGF0YTtcblxuICAgIGlmKHRoaXMuY29uZmlnLnJhd0J1ZmZlcil7XG4gICAgICAgIG1lc3NhZ2U9bmV3IEJ1ZmZlcih0eXBlLHRoaXMuZW5jb2RpbmcpO1xuICAgIH1lbHNle1xuICAgICAgICBtZXNzYWdlPWV2ZW50UGFyc2VyLmZvcm1hdChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jb25maWcuc3luYyl7XG4gICAgICAgIHRoaXMuc29ja2V0LndyaXRlKG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5xdWV1ZS5hZGQoXG4gICAgICAgIHN5bmNFbWl0LmJpbmQodGhpcyxtZXNzYWdlKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHN5bmNFbWl0KG1lc3NhZ2Upe1xuICAgIHRoaXMubG9nKCdkaXNwYXRjaGluZyBldmVudCB0byAnLmRlYnVnLCAodGhpcy5pZCkudmFyaWFibGUsIHRoaXMucGF0aC52YXJpYWJsZSwnIDogJywgbWVzc2FnZS5kYXRhKTtcbiAgICB0aGlzLnNvY2tldC53cml0ZShtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdCgpe1xuICAgIC8vaW5pdCBjbGllbnQgb2JqZWN0IGZvciBzY29wZSBwZXJzaXN0YW5jZSBlc3BlY2lhbGx5IGluc2lkZSBvZiBzb2NrZXQgZXZlbnRzLlxuICAgIGxldCBjbGllbnQ9dGhpcztcblxuICAgIGNsaWVudC5sb2coJ3JlcXVlc3RlZCBjb25uZWN0aW9uIHRvICcuZGVidWcsIGNsaWVudC5pZC52YXJpYWJsZSwgY2xpZW50LnBhdGgudmFyaWFibGUpO1xuICAgIGlmKCF0aGlzLnBhdGgpe1xuICAgICAgICBjbGllbnQubG9nKCdcXG5cXG4jIyMjIyNcXG5lcnJvcjogJy5lcnJvciwgY2xpZW50LmlkIC5pbmZvLCcgY2xpZW50IGhhcyBub3Qgc3BlY2lmaWVkIHNvY2tldCBwYXRoIGl0IHdpc2hlcyB0byBjb25uZWN0IHRvLicuZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIWNsaWVudC5wb3J0KXtcbiAgICAgICAgY2xpZW50LmxvZygnQ29ubmVjdGluZyBjbGllbnQgb24gVW5peCBTb2NrZXQgOicuZGVidWcsIGNsaWVudC5wYXRoLnZhcmlhYmxlKTtcblxuICAgICAgICBsZXQgcGF0aCA9IGNsaWVudC5wYXRoO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSd3aW4zMicgJiYgIWNsaWVudC5wYXRoLnN0YXJ0c1dpdGgoJ1xcXFxcXFxcLlxcXFxwaXBlXFxcXCcpKXtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8vZywgJy0nKTtcbiAgICAgICAgICAgIHBhdGg9IGBcXFxcXFxcXC5cXFxccGlwZVxcXFwke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICBjbGllbnQuc29ja2V0ID0gbmV0LmNvbm5lY3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1lbHNle1xuICAgICAgICBpZighY2xpZW50LmNvbmZpZy50bHMpe1xuICAgICAgICAgICAgY2xpZW50LmxvZygnQ29ubmVjdGluZyBjbGllbnQgdmlhIFRDUCB0bycuZGVidWcsIGNsaWVudC5wYXRoLnZhcmlhYmxlICxjbGllbnQucG9ydCk7XG4gICAgICAgICAgICBjbGllbnQuc29ja2V0ID0gbmV0LmNvbm5lY3QoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3J0OmNsaWVudC5wb3J0LFxuICAgICAgICAgICAgICAgICAgICBob3N0OmNsaWVudC5wYXRoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGllbnQubG9nKCdDb25uZWN0aW5nIGNsaWVudCB2aWEgVExTIHRvJy5kZWJ1ZywgY2xpZW50LnBhdGgudmFyaWFibGUgLGNsaWVudC5wb3J0LGNsaWVudC5jb25maWcudGxzKTtcbiAgICAgICAgICAgIGlmKGNsaWVudC5jb25maWcudGxzLnByaXZhdGUpe1xuICAgICAgICAgICAgICAgIGNsaWVudC5jb25maWcudGxzLmtleT1mcy5yZWFkRmlsZVN5bmMoY2xpZW50LmNvbmZpZy50bHMucHJpdmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjbGllbnQuY29uZmlnLnRscy5wdWJsaWMpe1xuICAgICAgICAgICAgICAgIGNsaWVudC5jb25maWcudGxzLmNlcnQ9ZnMucmVhZEZpbGVTeW5jKGNsaWVudC5jb25maWcudGxzLnB1YmxpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjbGllbnQuY29uZmlnLnRscy50cnVzdGVkQ29ubmVjdGlvbnMpe1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBjbGllbnQuY29uZmlnLnRscy50cnVzdGVkQ29ubmVjdGlvbnMgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LmNvbmZpZy50bHMudHJ1c3RlZENvbm5lY3Rpb25zPVtjbGllbnQuY29uZmlnLnRscy50cnVzdGVkQ29ubmVjdGlvbnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGllbnQuY29uZmlnLnRscy5jYT1bXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxjbGllbnQuY29uZmlnLnRscy50cnVzdGVkQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQuY29uZmlnLnRscy5jYS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnMucmVhZEZpbGVTeW5jKGNsaWVudC5jb25maWcudGxzLnRydXN0ZWRDb25uZWN0aW9uc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsaWVudC5jb25maWcudGxzLmhvc3Q9Y2xpZW50LnBhdGg7XG4gICAgICAgICAgICBjbGllbnQuY29uZmlnLnRscy5wb3J0PWNsaWVudC5wb3J0O1xuXG4gICAgICAgICAgICBjbGllbnQuc29ja2V0ID0gdGxzLmNvbm5lY3QoXG4gICAgICAgICAgICAgICAgY2xpZW50LmNvbmZpZy50bHNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGllbnQuc29ja2V0LnNldEVuY29kaW5nKHRoaXMuY29uZmlnLmVuY29kaW5nKTtcblxuICAgIGNsaWVudC5zb2NrZXQub24oXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgIGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICBjbGllbnQubG9nKCdcXG5cXG4jIyMjIyNcXG5lcnJvcjogJy5lcnJvciwgZXJyKTtcbiAgICAgICAgICAgIGNsaWVudC50cmlnZ2VyKCdlcnJvcicsIGVycik7XG5cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjbGllbnQuc29ja2V0Lm9uKFxuICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgIGZ1bmN0aW9uIGNvbm5lY3Rpb25NYWRlKCl7XG4gICAgICAgICAgICBjbGllbnQudHJpZ2dlcignY29ubmVjdCcpO1xuICAgICAgICAgICAgY2xpZW50LnJldHJpZXNSZW1haW5pbmc9Y2xpZW50LmNvbmZpZy5tYXhSZXRyaWVzO1xuICAgICAgICAgICAgY2xpZW50LmxvZygncmV0cnlpbmcgcmVzZXQnKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjbGllbnQuc29ja2V0Lm9uKFxuICAgICAgICAnY2xvc2UnLFxuICAgICAgICBmdW5jdGlvbiBjb25uZWN0aW9uQ2xvc2VkKCl7XG4gICAgICAgICAgICBjbGllbnQubG9nKCdjb25uZWN0aW9uIGNsb3NlZCcubm90aWNlICxjbGllbnQuaWQudmFyaWFibGUgLCBjbGllbnQucGF0aC52YXJpYWJsZSxcbiAgICAgICAgICAgIGAke2NsaWVudC5yZXRyaWVzUmVtYWluaW5nfSB0cmllcyByZW1haW5pbmcgb2YgJHtjbGllbnQuY29uZmlnLm1heFJldHJpZXN9YFxuICAgICAgICApO1xuXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBjbGllbnQuY29uZmlnLnN0b3BSZXRyeWluZyB8fCBjbGllbnQucmV0cmllc1JlbWFpbmluZzwxXG5cbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgY2xpZW50LnRyaWdnZXIoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICBjbGllbnQubG9nKFxuICAgICAgICAgICAgICAgICAgICAoY2xpZW50LmNvbmZpZy5pZCkudmFyaWFibGUsXG4gICAgICAgICAgICAgICAgICAgICdleGNlZWRlZCBjb25uZWN0aW9uIHJldHkgYW1vdW50IG9mJy53YXJuLFxuICAgICAgICAgICAgICAgICAgICAnIG9yIHN0b3BSZXRyeWluZyBmbGFnIHNldC4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNsaWVudC5zb2NrZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGNsaWVudC50cmlnZ2VyKCdkZXN0cm95Jyk7XG4gICAgICAgICAgICAgICAgY2xpZW50PXVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xpZW50LmlzUmV0cnlpbmc9dHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXRyeVRpbWVvdXQoKXtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LnJldHJpZXNSZW1haW5pbmctLTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LmlzUmV0cnlpbmc9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNldFJldHJpZXNDaGVjaygpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFjbGllbnQuaXNSZXRyeWluZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5yZXRyaWVzUmVtYWluaW5nPWNsaWVudC5jb25maWcubWF4UmV0cmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKG51bGwsY2xpZW50KSxcbiAgICAgICAgICAgICAgICBjbGllbnQuY29uZmlnLnJldHJ5XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjbGllbnQudHJpZ2dlcignZGlzY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNsaWVudC5zb2NrZXQub24oXG4gICAgICAgICdkYXRhJyxcbiAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY2xpZW50LmxvZygnIyMgcmVjaWV2ZWQgZXZlbnRzICMjJy5yYWluYm93KTtcbiAgICAgICAgICAgIGlmKGNsaWVudC5jb25maWcucmF3QnVmZmVyKXtcbiAgICAgICAgICAgICAgICBjbGllbnQudHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAnZGF0YScsXG4gICAgICAgICAgICAgICAgICAgbmV3IEJ1ZmZlcihkYXRhLHRoaXMuZW5jb2RpbmcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZighY2xpZW50LmNvbmZpZy5zeW5jKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsaWVudC5xdWV1ZS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5pcGNCdWZmZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXBjQnVmZmVyPScnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhPSh0aGlzLmlwY0J1ZmZlcis9ZGF0YSk7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuc2xpY2UoLTEpIT1ldmVudFBhcnNlci5kZWxpbWl0ZXIgfHwgZGF0YS5pbmRleE9mKGV2ZW50UGFyc2VyLmRlbGltaXRlcikgPT0gLTEpe1xuICAgICAgICAgICAgICAgIGNsaWVudC5sb2coJ0ltcGxlbWVudGluZyBsYXJnZXIgYnVmZmVyIGZvciB0aGlzIHNvY2tldCBtZXNzYWdlLiBZb3UgbWF5IHdhbnQgdG8gY29uc2lkZXIgc21hbGxlciBtZXNzYWdlcycubm90aWNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXBjQnVmZmVyPScnO1xuXG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBldmVudFBhcnNlci5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IGVDb3VudCA9IGV2ZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlQ291bnQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U9bmV3IE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5sb2FkKGV2ZW50c1tpXSk7XG5cbiAgICAgICAgICAgICAgICBjbGllbnQubG9nKCdkZXRlY3RlZCBldmVudCBvZiB0eXBlICcuZGVidWcsIG1lc3NhZ2UudHlwZS5kYXRhLCBtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNsaWVudC50cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighY2xpZW50LmNvbmZpZy5zeW5jKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsaWVudC5xdWV1ZS5uZXh0KCk7XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cz1pbml0O1xuIl19