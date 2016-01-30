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
        ipc.log('got a message from world : '.debug, data, '\n\n');
    });
});

console.log(ipc);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L2Jhc2ljU3luYy9oZWxsby1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgsR0FBaUIsSUFBakI7O0FBRUEsSUFBSSxZQUFKLENBQ0ksT0FESixFQUVJLFlBQVU7QUFDTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMkJBQTJCLE9BQTNCLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBNUM7OztBQURNLGFBSUYsSUFBSSxJQUFFLENBQUYsRUFBSyxJQUFFLEVBQUYsRUFBTSxHQUFuQixFQUF1QjtBQUNuQixnQkFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FDSSxTQURKLEVBRUksVUFBUSxDQUFSLENBRkosQ0FEbUI7U0FBdkI7S0FKSixDQUZKLENBRE07QUFlTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFlBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMEJBQTBCLE1BQTFCLENBQVIsQ0FETTtLQUFWLENBRkosQ0FmTTtBQXFCTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLDhCQUE4QixLQUE5QixFQUFxQyxJQUE3QyxFQUFrRCxNQUFsRCxFQURVO0tBQWQsQ0FGSixDQXJCTTtDQUFWLENBRko7O0FBZ0NBLFFBQVEsR0FBUixDQUFZLEdBQVoiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICdoZWxsbyc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuaXBjLmNvbmZpZy5zeW5jPSB0cnVlO1xuXG5pcGMuY29ubmVjdFRvTmV0KFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgLy9xdWV1ZSB1cCBhIGJ1bmNoIG9mIHJlcXVlc3RzIHRvIGJlIHNlbnQgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpcGMub2Yud29ybGQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWxsbycraVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdkaXNjb25uZWN0ZWQgZnJvbSB3b3JsZCcubm90aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSBmcm9tIHdvcmxkIDogJy5kZWJ1ZywgZGF0YSwnXFxuXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcblxuY29uc29sZS5sb2coaXBjKTtcbiJdfQ==