'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Defaults = require('../entities/Defaults.js'),
    Client = require('../dao/client.js'),
    Server = require('../dao/socketServer.js'),
    util = require('util');

var IPC = function IPC() {
    _classCallCheck(this, IPC);

    Object.defineProperties(this, {
        config: {
            enumerable: true,
            writable: true,
            value: new Defaults()
        },
        connectTo: {
            enumerable: true,
            writable: false,
            value: connect
        },
        connectToNet: {
            enumerable: true,
            writable: false,
            value: connectNet
        },
        disconnect: {
            enumerable: true,
            writable: false,
            value: disconnect
        },
        serve: {
            enumerable: true,
            writable: false,
            value: serve
        },
        serveNet: {
            enumerable: true,
            writable: false,
            value: serveNet
        },
        of: {
            enumerable: true,
            writable: true,
            value: {}
        },
        server: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: false
        },
        log: {
            enumerable: true,
            writable: false,
            value: log
        }
    });
};

function log() {
    if (this.config.silent) {
        return;
    }

    var args = Array.prototype.slice.call(arguments);

    for (var i = 0, count = args.length; i < count; i++) {
        if (_typeof(args[i]) != 'object') {
            continue;
        }

        args[i] = util.inspect(args[i], { colors: true });
    }

    console.log(args.join(' '));
}

function disconnect(id) {
    if (!this.of[id]) {
        return;
    }

    this.of[id].config.stopRetrying = true;

    this.of[id].off('*');
    if (this.of[id].socket) {
        if (this.of[id].socket.destroy) {
            this.of[id].socket.destroy();
        }
    }

    delete this.of[id];
}

function serve(path, callback) {
    if (typeof path == 'function') {
        callback = path;
        path = false;
    }
    if (!path) {
        this.log('Server path not specified, so defaulting to'.notice, 'ipc.config.socketRoot + ipc.config.appspace + ipc.config.id'.variable, (this.config.socketRoot + this.config.appspace + this.config.id).data);
        path = this.config.socketRoot + this.config.appspace + this.config.id;
    }

    if (!callback) {
        callback = emptyCallback;
    }

    this.server = new Server(path, this.config, log);

    this.server.on('start', callback);
}

function emptyCallback() {
    //Do Nothing
}

function serveNet(host, port, UDPType, callback) {
    if (typeof host == 'number') {
        callback = UDPType;
        UDPType = port;
        port = host;
        host = false;
    }
    if (typeof host == 'function') {
        callback = host;
        UDPType = false;
        host = false;
        port = false;
    }
    if (!host) {
        this.log('Server host not specified, so defaulting to'.notice, 'ipc.config.networkHost'.variable, this.config.networkHost.data);
        host = this.config.networkHost;
    }
    if (host.toLowerCase() == 'udp4' || host.toLowerCase() == 'udp6') {
        callback = port;
        UDPType = host.toLowerCase();
        port = false;
        host = this.config.networkHost;
    }

    if (typeof port == 'string') {
        callback = UDPType;
        UDPType = port;
        port = false;
    }
    if (typeof port == 'function') {
        callback = port;
        UDPType = false;
        port = false;
    }
    if (!port) {
        this.log('Server port not specified, so defaulting to'.notice, 'ipc.config.networkPort'.variable, this.config.networkPort);
        port = this.config.networkPort;
    }

    if (typeof UDPType == 'function') {
        callback = UDPType;
        UDPType = false;
    }

    if (!callback) {
        callback = emptyCallback;
    }

    this.server = new Server(host, this.config, log, port);

    if (UDPType) {
        this.server[UDPType] = true;
    }

    this.server.on('start', callback);
}

function connect(id, path, callback) {
    if (typeof path == 'function') {
        callback = path;
        path = false;
    }

    if (!callback) {
        callback = emptyCallback;
    }

    if (!id) {
        this.log('Service id required'.warn, 'Requested service connection without specifying service id. Aborting connection attempt'.notice);
        return;
    }

    if (!path) {
        this.log('Service path not specified, so defaulting to'.notice, 'ipc.config.socketRoot + ipc.config.appspace + id'.variable, (this.config.socketRoot + this.config.appspace + id).data);
        path = this.config.socketRoot + this.config.appspace + id;
    }

    if (this.of[id]) {
        if (!this.of[id].socket.destroyed) {
            this.log('Already Connected to'.notice, id.variable, '- So executing success without connection'.notice);
            callback();
            return;
        }
        this.of[id].socket.destroy();
    }

    this.of[id] = new Client(this.config, this.log);
    this.of[id].id = id;
    this.of[id].path = path;

    this.of[id].connect();

    callback(this);
}

function connectNet(id, host, port, callback) {
    if (!id) {
        this.log('Service id required'.warn, 'Requested service connection without specifying service id. Aborting connection attempt'.notice);
        return;
    }
    if (typeof host == 'number') {
        callback = port;
        port = host;
        host = false;
    }
    if (typeof host == 'function') {
        callback = host;
        host = false;
        port = false;
    }
    if (!host) {
        this.log('Server host not specified, so defaulting to'.notice, 'ipc.config.networkHost'.variable, this.config.networkHost.data);
        host = this.config.networkHost;
    }

    if (typeof port == 'function') {
        callback = port;
        port = false;
    }
    if (!port) {
        this.log('Server port not specified, so defaulting to'.notice, 'ipc.config.networkPort'.variable, this.config.networkPort);
        port = this.config.networkPort;
    }

    if (typeof callback == 'string') {
        UDPType = callback;
        callback = false;
    }
    if (!callback) {
        callback = emptyCallback;
    }

    if (this.of[id]) {
        if (!this.of[id].socket.destroyed) {
            this.log('Already Connected to'.notice, id.variable, '- So executing success without connection'.notice);
            callback();
            return;
        }
        this.of[id].socket.destroy();
    }

    this.of[id] = new Client(this.config, this.log);
    this.of[id].id = id;
    this.of[id].path = host;
    this.of[id].port = port;

    this.of[id].connect();

    callback(this);
}

module.exports = IPC;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGUtaXBjL3NlcnZpY2VzL0lQQy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLFFBQVEseUJBQVIsQ0FBWDtJQUNGLFNBQVMsUUFBUSxrQkFBUixDQUFUO0lBQ0EsU0FBUyxRQUFRLHdCQUFSLENBQVQ7SUFDQSxPQUFPLFFBQVEsTUFBUixDQUFQOztJQUVFLE1BQ0YsU0FERSxHQUNGLEdBQWE7MEJBRFgsS0FDVzs7QUFDVCxXQUFPLGdCQUFQLENBQ0ksSUFESixFQUVJO0FBQ0ksZ0JBQWM7QUFDVix3QkFBVyxJQUFYO0FBQ0Esc0JBQVMsSUFBVDtBQUNBLG1CQUFNLElBQUksUUFBSixFQUFOO1NBSEo7QUFLQSxtQkFBYztBQUNWLHdCQUFXLElBQVg7QUFDQSxzQkFBUyxLQUFUO0FBQ0EsbUJBQU0sT0FBTjtTQUhKO0FBS0Esc0JBQWM7QUFDVix3QkFBVyxJQUFYO0FBQ0Esc0JBQVMsS0FBVDtBQUNBLG1CQUFNLFVBQU47U0FISjtBQUtBLG9CQUFjO0FBQ1Ysd0JBQVcsSUFBWDtBQUNBLHNCQUFTLEtBQVQ7QUFDQSxtQkFBTSxVQUFOO1NBSEo7QUFLQSxlQUFjO0FBQ1Ysd0JBQVcsSUFBWDtBQUNBLHNCQUFTLEtBQVQ7QUFDQSxtQkFBTSxLQUFOO1NBSEo7QUFLQSxrQkFBYztBQUNWLHdCQUFXLElBQVg7QUFDQSxzQkFBUyxLQUFUO0FBQ0EsbUJBQU0sUUFBTjtTQUhKO0FBS0EsWUFBYztBQUNWLHdCQUFXLElBQVg7QUFDQSxzQkFBUyxJQUFUO0FBQ0EsbUJBQU0sRUFBTjtTQUhKO0FBS0EsZ0JBQWM7QUFDVix3QkFBVyxJQUFYO0FBQ0Esc0JBQVMsSUFBVDtBQUNBLDBCQUFhLElBQWI7QUFDQSxtQkFBTSxLQUFOO1NBSko7QUFNQSxhQUFjO0FBQ1Ysd0JBQVcsSUFBWDtBQUNBLHNCQUFTLEtBQVQ7QUFDQSxtQkFBTSxHQUFOO1NBSEo7S0E1Q1IsRUFEUztDQUFiOztBQXVESixTQUFTLEdBQVQs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LElBQW5CLENBL0RzQztBQWdFdEMsU0FBSyxFQUFMLENBQVEsRUFBUixFQUFZLElBQVosR0FBbUIsSUFBbkIsQ0FoRXNDOztBQWtFdEMsU0FBSyxFQUFMLENBQVEsRUFBUixFQUFZLE9BQVosR0FsRXNDOztBQW9FdEMsYUFBUyxJQUFULEVBcEVzQztDQUExQzs7QUF1RUEsT0FBTyxPQUFQLEdBQWUsR0FBZiIsImZpbGUiOiJJUEMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmF1bHRzID0gcmVxdWlyZSgnLi4vZW50aXRpZXMvRGVmYXVsdHMuanMnKSxcbiAgICBDbGllbnQgPSByZXF1aXJlKCcuLi9kYW8vY2xpZW50LmpzJyksXG4gICAgU2VydmVyID0gcmVxdWlyZSgnLi4vZGFvL3NvY2tldFNlcnZlci5qcycpLFxuICAgIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbmNsYXNzIElQQ3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6bmV3IERlZmF1bHRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb25uZWN0VG8gICA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6Y29ubmVjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29ubmVjdFRvTmV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmNvbm5lY3ROZXRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3QgIDoge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpkaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2ZSAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6c2VydmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZlTmV0ICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpzZXJ2ZU5ldFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb2YgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6e31cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZlciAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9nICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmxvZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvZygpe1xuICAgIGlmKHRoaXMuY29uZmlnLnNpbGVudCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYXJncz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgZm9yKGxldCBpPTAsIGNvdW50PWFyZ3MubGVuZ3RoOyBpPGNvdW50OyBpKyspe1xuICAgICAgICBpZih0eXBlb2YgYXJnc1tpXSAhPSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3NbaV09dXRpbC5pbnNwZWN0KGFyZ3NbaV0se2NvbG9yczp0cnVlfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIGFyZ3Muam9pbignICcpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZGlzY29ubmVjdChpZCl7XG4gICAgaWYoIXRoaXMub2ZbaWRdKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2ZbaWRdLmNvbmZpZy5zdG9wUmV0cnlpbmc9dHJ1ZTtcblxuICAgIHRoaXMub2ZbaWRdLm9mZignKicpO1xuICAgIGlmKHRoaXMub2ZbaWRdLnNvY2tldCl7XG4gICAgICAgIGlmKHRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95KXtcbiAgICAgICAgICAgIHRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5vZltpZF07XG59XG5cbmZ1bmN0aW9uIHNlcnZlKHBhdGgsY2FsbGJhY2spe1xuICAgIGlmKHR5cGVvZiBwYXRoPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgY2FsbGJhY2s9cGF0aDtcbiAgICAgICAgcGF0aD1mYWxzZTtcbiAgICB9XG4gICAgaWYoIXBhdGgpe1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgICdTZXJ2ZXIgcGF0aCBub3Qgc3BlY2lmaWVkLCBzbyBkZWZhdWx0aW5nIHRvJy5ub3RpY2UsXG4gICAgICAgICAgICAnaXBjLmNvbmZpZy5zb2NrZXRSb290ICsgaXBjLmNvbmZpZy5hcHBzcGFjZSArIGlwYy5jb25maWcuaWQnLnZhcmlhYmxlLFxuICAgICAgICAgICAgKHRoaXMuY29uZmlnLnNvY2tldFJvb3QrdGhpcy5jb25maWcuYXBwc3BhY2UrdGhpcy5jb25maWcuaWQpLmRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgcGF0aD10aGlzLmNvbmZpZy5zb2NrZXRSb290K3RoaXMuY29uZmlnLmFwcHNwYWNlK3RoaXMuY29uZmlnLmlkO1xuICAgIH1cblxuICAgIGlmKCFjYWxsYmFjayl7XG4gICAgICAgIGNhbGxiYWNrPWVtcHR5Q2FsbGJhY2s7XG4gICAgfVxuXG4gICAgdGhpcy5zZXJ2ZXI9bmV3IFNlcnZlcihcbiAgICAgICAgcGF0aCxcbiAgICAgICAgdGhpcy5jb25maWcsXG4gICAgICAgIGxvZ1xuICAgICk7XG5cbiAgICB0aGlzLnNlcnZlci5vbihcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgY2FsbGJhY2tcbiAgICApO1xufVxuXG5mdW5jdGlvbiBlbXB0eUNhbGxiYWNrKCl7XG4gICAgLy9EbyBOb3RoaW5nXG59XG5cbmZ1bmN0aW9uIHNlcnZlTmV0KGhvc3QscG9ydCxVRFBUeXBlLGNhbGxiYWNrKXtcbiAgICBpZih0eXBlb2YgaG9zdD09J251bWJlcicpe1xuICAgICAgICBjYWxsYmFjaz1VRFBUeXBlO1xuICAgICAgICBVRFBUeXBlPXBvcnQ7XG4gICAgICAgIHBvcnQ9aG9zdDtcbiAgICAgICAgaG9zdD1mYWxzZTtcbiAgICB9XG4gICAgaWYodHlwZW9mIGhvc3Q9PSdmdW5jdGlvbicpe1xuICAgICAgICBjYWxsYmFjaz1ob3N0O1xuICAgICAgICBVRFBUeXBlPWZhbHNlO1xuICAgICAgICBob3N0PWZhbHNlO1xuICAgICAgICBwb3J0PWZhbHNlO1xuICAgIH1cbiAgICBpZighaG9zdCl7XG4gICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgJ1NlcnZlciBob3N0IG5vdCBzcGVjaWZpZWQsIHNvIGRlZmF1bHRpbmcgdG8nLm5vdGljZSxcbiAgICAgICAgICAgICdpcGMuY29uZmlnLm5ldHdvcmtIb3N0Jy52YXJpYWJsZSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm5ldHdvcmtIb3N0LmRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgaG9zdD10aGlzLmNvbmZpZy5uZXR3b3JrSG9zdDtcbiAgICB9XG4gICAgaWYoaG9zdC50b0xvd2VyQ2FzZSgpPT0ndWRwNCcgfHwgaG9zdC50b0xvd2VyQ2FzZSgpPT0ndWRwNicpe1xuICAgICAgICBjYWxsYmFjaz1wb3J0O1xuICAgICAgICBVRFBUeXBlPWhvc3QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcG9ydD1mYWxzZTtcbiAgICAgICAgaG9zdD10aGlzLmNvbmZpZy5uZXR3b3JrSG9zdDtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgcG9ydD09J3N0cmluZycpe1xuICAgICAgICBjYWxsYmFjaz1VRFBUeXBlO1xuICAgICAgICBVRFBUeXBlPXBvcnQ7XG4gICAgICAgIHBvcnQ9ZmFsc2U7XG4gICAgfVxuICAgIGlmKHR5cGVvZiBwb3J0PT0nZnVuY3Rpb24nKXtcbiAgICAgICAgY2FsbGJhY2s9cG9ydDtcbiAgICAgICAgVURQVHlwZT1mYWxzZTtcbiAgICAgICAgcG9ydD1mYWxzZTtcbiAgICB9XG4gICAgaWYoIXBvcnQpe1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgICdTZXJ2ZXIgcG9ydCBub3Qgc3BlY2lmaWVkLCBzbyBkZWZhdWx0aW5nIHRvJy5ub3RpY2UsXG4gICAgICAgICAgICAnaXBjLmNvbmZpZy5uZXR3b3JrUG9ydCcudmFyaWFibGUsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5uZXR3b3JrUG9ydFxuICAgICAgICApO1xuICAgICAgICBwb3J0PXRoaXMuY29uZmlnLm5ldHdvcmtQb3J0O1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBVRFBUeXBlPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgY2FsbGJhY2s9VURQVHlwZTtcbiAgICAgICAgVURQVHlwZT1mYWxzZTtcbiAgICB9XG5cbiAgICBpZighY2FsbGJhY2spe1xuICAgICAgICBjYWxsYmFjaz1lbXB0eUNhbGxiYWNrO1xuICAgIH1cblxuICAgIHRoaXMuc2VydmVyPW5ldyBTZXJ2ZXIoXG4gICAgICAgIGhvc3QsXG4gICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICBsb2csXG4gICAgICAgIHBvcnRcbiAgICApO1xuXG4gICAgaWYoVURQVHlwZSl7XG4gICAgICAgIHRoaXMuc2VydmVyW1VEUFR5cGVdPXRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5zZXJ2ZXIub24oXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgIGNhbGxiYWNrXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdChpZCxwYXRoLGNhbGxiYWNrKXtcbiAgICBpZih0eXBlb2YgcGF0aCA9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgY2FsbGJhY2s9cGF0aDtcbiAgICAgICAgcGF0aD1mYWxzZTtcbiAgICB9XG5cbiAgICBpZighY2FsbGJhY2spe1xuICAgICAgICBjYWxsYmFjaz1lbXB0eUNhbGxiYWNrO1xuICAgIH1cblxuICAgIGlmKCFpZCl7XG4gICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgJ1NlcnZpY2UgaWQgcmVxdWlyZWQnLndhcm4sXG4gICAgICAgICAgICAnUmVxdWVzdGVkIHNlcnZpY2UgY29ubmVjdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgc2VydmljZSBpZC4gQWJvcnRpbmcgY29ubmVjdGlvbiBhdHRlbXB0Jy5ub3RpY2VcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFwYXRoKXtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICAnU2VydmljZSBwYXRoIG5vdCBzcGVjaWZpZWQsIHNvIGRlZmF1bHRpbmcgdG8nLm5vdGljZSxcbiAgICAgICAgICAgICdpcGMuY29uZmlnLnNvY2tldFJvb3QgKyBpcGMuY29uZmlnLmFwcHNwYWNlICsgaWQnLnZhcmlhYmxlLFxuICAgICAgICAgICAgKHRoaXMuY29uZmlnLnNvY2tldFJvb3QrdGhpcy5jb25maWcuYXBwc3BhY2UraWQpLmRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgcGF0aD10aGlzLmNvbmZpZy5zb2NrZXRSb290K3RoaXMuY29uZmlnLmFwcHNwYWNlK2lkO1xuICAgIH1cblxuICAgIGlmKHRoaXMub2ZbaWRdKXtcbiAgICAgICAgaWYoIXRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95ZWQpe1xuICAgICAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICAgICAgJ0FscmVhZHkgQ29ubmVjdGVkIHRvJy5ub3RpY2UsXG4gICAgICAgICAgICAgICAgaWQudmFyaWFibGUsXG4gICAgICAgICAgICAgICAgJy0gU28gZXhlY3V0aW5nIHN1Y2Nlc3Mgd2l0aG91dCBjb25uZWN0aW9uJy5ub3RpY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vZltpZF0gPSBuZXcgQ2xpZW50KHRoaXMuY29uZmlnLHRoaXMubG9nKTtcbiAgICB0aGlzLm9mW2lkXS5pZCA9IGlkO1xuICAgIHRoaXMub2ZbaWRdLnBhdGggPSBwYXRoO1xuXG4gICAgdGhpcy5vZltpZF0uY29ubmVjdCgpO1xuXG4gICAgY2FsbGJhY2sodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3ROZXQoaWQsaG9zdCxwb3J0LGNhbGxiYWNrKXtcbiAgICBpZighaWQpe1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgICdTZXJ2aWNlIGlkIHJlcXVpcmVkJy53YXJuLFxuICAgICAgICAgICAgJ1JlcXVlc3RlZCBzZXJ2aWNlIGNvbm5lY3Rpb24gd2l0aG91dCBzcGVjaWZ5aW5nIHNlcnZpY2UgaWQuIEFib3J0aW5nIGNvbm5lY3Rpb24gYXR0ZW1wdCcubm90aWNlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodHlwZW9mIGhvc3Q9PSdudW1iZXInKXtcbiAgICAgICAgY2FsbGJhY2s9cG9ydDtcbiAgICAgICAgcG9ydD1ob3N0O1xuICAgICAgICBob3N0PWZhbHNlO1xuICAgIH1cbiAgICBpZih0eXBlb2YgaG9zdD09J2Z1bmN0aW9uJyl7XG4gICAgICAgIGNhbGxiYWNrPWhvc3Q7XG4gICAgICAgIGhvc3Q9ZmFsc2U7XG4gICAgICAgIHBvcnQ9ZmFsc2U7XG4gICAgfVxuICAgIGlmKCFob3N0KXtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICAnU2VydmVyIGhvc3Qgbm90IHNwZWNpZmllZCwgc28gZGVmYXVsdGluZyB0bycubm90aWNlLFxuICAgICAgICAgICAgJ2lwYy5jb25maWcubmV0d29ya0hvc3QnLnZhcmlhYmxlLFxuICAgICAgICAgICAgdGhpcy5jb25maWcubmV0d29ya0hvc3QuZGF0YVxuICAgICAgICApO1xuICAgICAgICBob3N0PXRoaXMuY29uZmlnLm5ldHdvcmtIb3N0O1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBwb3J0PT0nZnVuY3Rpb24nKXtcbiAgICAgICAgY2FsbGJhY2s9cG9ydDtcbiAgICAgICAgcG9ydD1mYWxzZTtcbiAgICB9XG4gICAgaWYoIXBvcnQpe1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgICdTZXJ2ZXIgcG9ydCBub3Qgc3BlY2lmaWVkLCBzbyBkZWZhdWx0aW5nIHRvJy5ub3RpY2UsXG4gICAgICAgICAgICAnaXBjLmNvbmZpZy5uZXR3b3JrUG9ydCcudmFyaWFibGUsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5uZXR3b3JrUG9ydFxuICAgICAgICApO1xuICAgICAgICBwb3J0PXRoaXMuY29uZmlnLm5ldHdvcmtQb3J0O1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnc3RyaW5nJyl7XG4gICAgICAgIFVEUFR5cGU9Y2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrPWZhbHNlO1xuICAgIH1cbiAgICBpZighY2FsbGJhY2spe1xuICAgICAgICBjYWxsYmFjaz1lbXB0eUNhbGxiYWNrO1xuICAgIH1cblxuICAgIGlmKHRoaXMub2ZbaWRdKXtcbiAgICAgICAgaWYoIXRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95ZWQpe1xuICAgICAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICAgICAgJ0FscmVhZHkgQ29ubmVjdGVkIHRvJy5ub3RpY2UsXG4gICAgICAgICAgICAgICAgaWQudmFyaWFibGUsXG4gICAgICAgICAgICAgICAgJy0gU28gZXhlY3V0aW5nIHN1Y2Nlc3Mgd2l0aG91dCBjb25uZWN0aW9uJy5ub3RpY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZbaWRdLnNvY2tldC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vZltpZF0gPSBuZXcgQ2xpZW50KHRoaXMuY29uZmlnLHRoaXMubG9nKTtcbiAgICB0aGlzLm9mW2lkXS5pZCA9IGlkO1xuICAgIHRoaXMub2ZbaWRdLnBhdGggPSBob3N0O1xuICAgIHRoaXMub2ZbaWRdLnBvcnQgPSBwb3J0O1xuXG4gICAgdGhpcy5vZltpZF0uY29ubmVjdCgpO1xuXG4gICAgY2FsbGJhY2sodGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzPUlQQztcbiJdfQ==