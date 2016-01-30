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
ipc.config.sync = true;

ipc.serve(function () {
    ipc.server.on('app.message', function (data, socket) {
        //ipc.log('got a message from'.debug, (data.id).variable, (data.message).data);

        setTimeout(function () {
            ipc.server.emit(socket, 'app.message', {
                id: ipc.config.id,
                message: data.message + ' world!'
            });
        }, 2000);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvYmFzaWNTeW5jL3dvcmxkLXNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsSUFBWCxHQUFpQixJQUFqQjs7QUFFQSxJQUFJLEtBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLGFBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCOzs7QUFHakIsbUJBQ0ksWUFBVTtBQUNOLGdCQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLGFBRkosRUFHSTtBQUNJLG9CQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVix5QkFBVSxLQUFLLE9BQUwsR0FBYSxTQUFiO2FBTGxCLEVBRE07U0FBVixFQVVBLElBWEosRUFIaUI7S0FBckIsQ0FGSixDQURNO0NBQVYsQ0FESjs7QUEyQkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnN5bmM9IHRydWU7XG5cbmlwYy5zZXJ2ZShcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ2FwcC5tZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICAvL2lwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbScuZGVidWcsIChkYXRhLmlkKS52YXJpYWJsZSwgKGRhdGEubWVzc2FnZSkuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBwLm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBkYXRhLm1lc3NhZ2UrJyB3b3JsZCEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMjAwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcblxuXG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==