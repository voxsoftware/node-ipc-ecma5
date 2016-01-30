'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'world';
ipc.config.retry = 1500;

var messages = {
    goodbye: false,
    hello: false
};

ipc.serveNet(function () {
    ipc.server.on('app.message', function (data, socket) {
        ipc.log('got a message from'.debug, data.id.variable, data.message.data);
        messages[data.id] = true;
        ipc.server.emit(socket, 'app.message', {
            id: ipc.config.id,
            message: data.message + ' world!'
        });

        if (messages.hello && messages.goodbye) {
            ipc.log('got all required events, telling clients to kill connection'.good);
            ipc.server.broadcast('kill.connection', {
                id: ipc.config.id
            });
        }
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3Qvd29ybGQtc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxXQUFTO0FBQ1QsYUFBUSxLQUFSO0FBQ0EsV0FBTSxLQUFOO0NBRkE7O0FBS0osSUFBSSxRQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxhQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxxQkFBcUIsS0FBckIsRUFBNEIsSUFBQyxDQUFLLEVBQUwsQ0FBUyxRQUFWLEVBQW9CLElBQUMsQ0FBSyxPQUFMLENBQWMsSUFBZixDQUF4RCxDQURpQjtBQUVqQixpQkFBUyxLQUFLLEVBQUwsQ0FBVCxHQUFrQixJQUFsQixDQUZpQjtBQUdqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLGFBRkosRUFHSTtBQUNJLGdCQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVixxQkFBVSxLQUFLLE9BQUwsR0FBYSxTQUFiO1NBTGxCLEVBSGlCOztBQVlqQixZQUFHLFNBQVMsS0FBVCxJQUFrQixTQUFTLE9BQVQsRUFBaUI7QUFDbEMsZ0JBQUksR0FBSixDQUFRLDhEQUE4RCxJQUE5RCxDQUFSLENBRGtDO0FBRWxDLGdCQUFJLE1BQUosQ0FBVyxTQUFYLENBQ0ksaUJBREosRUFFSTtBQUNJLG9CQUFHLElBQUksTUFBSixDQUFXLEVBQVg7YUFIWCxFQUZrQztTQUF0QztLQVpKLENBRkosQ0FETTtDQUFWLENBREo7O0FBaUNBLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoid29ybGQtc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICd3b3JsZCc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuXG52YXIgbWVzc2FnZXM9e1xuICAgIGdvb2RieWU6ZmFsc2UsXG4gICAgaGVsbG86ZmFsc2Vcbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ2FwcC5tZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20nLmRlYnVnLCAoZGF0YS5pZCkudmFyaWFibGUsIChkYXRhLm1lc3NhZ2UpLmRhdGEpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzW2RhdGEuaWRdPXRydWU7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IGRhdGEubWVzc2FnZSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlcy5oZWxsbyAmJiBtZXNzYWdlcy5nb29kYnllKXtcbiAgICAgICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGFsbCByZXF1aXJlZCBldmVudHMsIHRlbGxpbmcgY2xpZW50cyB0byBraWxsIGNvbm5lY3Rpb24nLmdvb2QpO1xuICAgICAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmJyb2FkY2FzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdraWxsLmNvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOmlwYy5jb25maWcuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcblxuXG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19