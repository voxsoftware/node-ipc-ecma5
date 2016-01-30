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
//node-ipc will default to its local certs
ipc.config.tls = {
    rejectUnauthorized: false
};

ipc.serveNet(function () {
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message : '.debug, data);
        ipc.server.emit(socket, 'message', data + ' world!');
    });

    ipc.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLWxvY2FsLW9ubHkvd29ybGQtc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxNQUFKLENBQVcsR0FBWCxHQUFlO0FBQ1gsd0JBQW1CLEtBQW5CO0NBREo7O0FBSUEsSUFBSSxRQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxtQkFBbUIsS0FBbkIsRUFBMEIsSUFBbEMsRUFEaUI7QUFFakIsWUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxTQUZKLEVBR0ksT0FBSyxTQUFMLENBSEosQ0FGaUI7S0FBckIsQ0FGSixDQURNOztBQWFOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxxQkFESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFEaUI7S0FBckIsQ0FGSixDQWJNO0NBQVYsQ0FESjs7QUF5QkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG4vL25vZGUtaXBjIHdpbGwgZGVmYXVsdCB0byBpdHMgbG9jYWwgY2VydHNcbmlwYy5jb25maWcudGxzPXtcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6ZmFsc2Vcbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSxzb2NrZXQpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhKycgd29ybGQhJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdzb2NrZXQuZGlzY29ubmVjdGVkJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=