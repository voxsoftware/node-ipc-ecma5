'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'hello';
ipc.config.retry = 1000;
ipc.config.sync = true;

ipc.connectTo('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);

        //queue up a bunch of requests to be sent synchronously
        for (var i = 0; i < 10; i++) {
            ipc.of.world.emit('app.message', {
                id: ipc.config.id,
                message: 'hello' + i
            });
        }
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('app.message', function (data) {
        ipc.log('got a message from world : '.debug, data);
    });

    console.log(ipc.of.world.destroy);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvYmFzaWNTeW5jL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQW1CLElBQW5CO0FBQ0EsSUFBSSxNQUFKLENBQVcsSUFBWCxHQUFpQixJQUFqQjs7QUFFQSxJQUFJLFNBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1Qzs7O0FBRE0sYUFJRixJQUFJLElBQUUsQ0FBRixFQUFLLElBQUUsRUFBRixFQUFNLEdBQW5CLEVBQXVCO0FBQ25CLGdCQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLGFBREosRUFFSTtBQUNJLG9CQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVix5QkFBVSxVQUFRLENBQVI7YUFKbEIsRUFEbUI7U0FBdkI7S0FKSixDQUZKLENBRE07QUFrQk4sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxZQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDBCQUEwQixNQUExQixDQUFSLENBRE07S0FBVixDQUZKLENBbEJNO0FBd0JOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksYUFESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsOEJBQThCLEtBQTlCLEVBQXFDLElBQTdDLEVBRFU7S0FBZCxDQUZKLENBeEJNOztBQStCTixZQUFRLEdBQVIsQ0FBWSxJQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsT0FBYixDQUFaLENBL0JNO0NBQVYsQ0FGSiIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnkgPSAxMDAwO1xuaXBjLmNvbmZpZy5zeW5jPSB0cnVlO1xuXG5pcGMuY29ubmVjdFRvKFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgLy9xdWV1ZSB1cCBhIGJ1bmNoIG9mIHJlcXVlc3RzIHRvIGJlIHNlbnQgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpcGMub2Yud29ybGQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdoZWxsbycraVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdkaXNjb25uZWN0ZWQgZnJvbSB3b3JsZCcubm90aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2FwcC5tZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSB3b3JsZCA6ICcuZGVidWcsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGlwYy5vZi53b3JsZC5kZXN0cm95KTtcbiAgICB9XG4pO1xuIl19