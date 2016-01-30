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
ipc.config.sync = true;
ipc.config.tls = {
    rejectUnauthorized: false
};

ipc.connectToNet('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);

        //queue up a bunch of requests to be sent synchronously
        for (var i = 0; i < 10; i++) {
            ipc.of.world.emit('message', 'hello' + i);
        }
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('message', function (data) {
        ipc.log('got a message from world : '.debug, data);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljU3luYy9oZWxsby1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgsR0FBaUIsSUFBakI7QUFDQSxJQUFJLE1BQUosQ0FBVyxHQUFYLEdBQWU7QUFDWCx3QkFBbUIsS0FBbkI7Q0FESjs7QUFJQSxJQUFJLFlBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1Qzs7O0FBRE0sYUFJRixJQUFJLElBQUUsQ0FBRixFQUFLLElBQUUsRUFBRixFQUFNLEdBQW5CLEVBQXVCO0FBQ25CLGdCQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLFNBREosRUFFSSxVQUFRLENBQVIsQ0FGSixDQURtQjtTQUF2QjtLQUpKLENBRkosQ0FETTtBQWVOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksWUFESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwwQkFBMEIsTUFBMUIsQ0FBUixDQURNO0tBQVYsQ0FGSixDQWZNO0FBcUJOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsOEJBQThCLEtBQTlCLEVBQXFDLElBQTdDLEVBRFU7S0FBZCxDQUZKLENBckJNO0NBQVYsQ0FGSiIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnN5bmM9IHRydWU7XG5pcGMuY29uZmlnLnRscz17XG4gICAgcmVqZWN0VW5hdXRob3JpemVkOmZhbHNlXG59O1xuXG5pcGMuY29ubmVjdFRvTmV0KFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgLy9xdWV1ZSB1cCBhIGJ1bmNoIG9mIHJlcXVlc3RzIHRvIGJlIHNlbnQgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpcGMub2Yud29ybGQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWxsbycraVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdkaXNjb25uZWN0ZWQgZnJvbSB3b3JsZCcubm90aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSBmcm9tIHdvcmxkIDogJy5kZWJ1ZywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcbiJdfQ==