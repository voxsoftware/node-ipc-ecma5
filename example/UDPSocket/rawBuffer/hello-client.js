'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'hello';
ipc.config.retry = 1500;
ipc.config.rawBuffer = true;
ipc.config.encoding = 'ascii';

ipc.serveNet(8001, //we set the port here because the world server is already using the default of 8000. So we can not bind to 8000 while world is using it.
'udp4', function () {
    ipc.server.on('data', function (data) {
        ipc.log('got a message from world '.debug, data, data.toString());
    });
    ipc.server.emit({
        address: 'localhost',
        port: ipc.config.networkPort
    }, 'hello');
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L3Jhd0J1ZmZlci9oZWxsby1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFNBQVgsR0FBcUIsSUFBckI7QUFDQSxJQUFJLE1BQUosQ0FBVyxRQUFYLEdBQW9CLE9BQXBCOztBQUVBLElBQUksUUFBSixDQUNJLElBREo7QUFFSSxNQUZKLEVBR0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxNQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSw0QkFBNEIsS0FBNUIsRUFBbUMsSUFBM0MsRUFBaUQsS0FBSyxRQUFMLEVBQWpELEVBRFU7S0FBZCxDQUZKLENBRE07QUFPTixRQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0k7QUFDSSxpQkFBVSxXQUFWO0FBQ0EsY0FBVSxJQUFJLE1BQUosQ0FBVyxXQUFYO0tBSGxCLEVBS0ksT0FMSixFQVBNO0NBQVYsQ0FISjs7QUFvQkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnJhd0J1ZmZlcj10cnVlO1xuaXBjLmNvbmZpZy5lbmNvZGluZz0nYXNjaWknO1xuXG5pcGMuc2VydmVOZXQoXG4gICAgODAwMSwgLy93ZSBzZXQgdGhlIHBvcnQgaGVyZSBiZWNhdXNlIHRoZSB3b3JsZCBzZXJ2ZXIgaXMgYWxyZWFkeSB1c2luZyB0aGUgZGVmYXVsdCBvZiA4MDAwLiBTbyB3ZSBjYW4gbm90IGJpbmQgdG8gODAwMCB3aGlsZSB3b3JsZCBpcyB1c2luZyBpdC5cbiAgICAndWRwNCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdkYXRhJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSB3b3JsZCAnLmRlYnVnLCBkYXRhLCBkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA6ICdsb2NhbGhvc3QnLFxuICAgICAgICAgICAgICAgIHBvcnQgICAgOiBpcGMuY29uZmlnLm5ldHdvcmtQb3J0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICApO1xuICAgIH1cbik7XG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==