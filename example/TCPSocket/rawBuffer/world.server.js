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
ipc.config.rawBuffer = true;
ipc.config.encoding = 'ascii';

ipc.serveNet(function () {
    ipc.server.on('connect', function (socket) {
        ipc.server.emit(socket, 'hello');
    });

    ipc.server.on('data', function (data, socket) {
        ipc.log('got a message'.debug, data, data.toString());
        ipc.server.emit(socket, 'goodbye');
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L3Jhd0J1ZmZlci93b3JsZC5zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFNBQVgsR0FBcUIsSUFBckI7QUFDQSxJQUFJLE1BQUosQ0FBVyxRQUFYLEdBQW9CLE9BQXBCOztBQUVBLElBQUksUUFBSixDQUNJLFlBQVU7QUFDTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksU0FESixFQUVJLFVBQVMsTUFBVCxFQUFnQjtBQUNaLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksT0FGSixFQURZO0tBQWhCLENBRkosQ0FETTs7QUFXTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksTUFESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsWUFBSSxHQUFKLENBQVEsZ0JBQWdCLEtBQWhCLEVBQXVCLElBQS9CLEVBQW9DLEtBQUssUUFBTCxFQUFwQyxFQURpQjtBQUVqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFGaUI7S0FBckIsQ0FGSixDQVhNO0NBQVYsQ0FESjs7QUF5QkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnJhd0J1ZmZlcj10cnVlO1xuaXBjLmNvbmZpZy5lbmNvZGluZz0nYXNjaWknO1xuXG5pcGMuc2VydmVOZXQoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdoZWxsbydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnZGF0YScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZScuZGVidWcsIGRhdGEsZGF0YS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ2dvb2RieWUnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=