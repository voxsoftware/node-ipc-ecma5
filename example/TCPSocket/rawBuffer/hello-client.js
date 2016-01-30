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

ipc.connectToNet('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('hello');
    });

    ipc.of.world.on('data', function (data) {
        ipc.log('got a message from world : '.debug, data, data.toString());
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L3Jhd0J1ZmZlci9oZWxsby1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFNBQVgsR0FBcUIsSUFBckI7QUFDQSxJQUFJLE1BQUosQ0FBVyxRQUFYLEdBQW9CLE9BQXBCOztBQUVBLElBQUksWUFBSixDQUNJLE9BREosRUFFSSxZQUFVO0FBQ04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDJCQUEyQixPQUEzQixFQUFvQyxJQUFJLE1BQUosQ0FBVyxLQUFYLENBQTVDLENBRE07QUFFTixZQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLE9BREosRUFGTTtLQUFWLENBRkosQ0FETTs7QUFXTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLE1BREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLDhCQUE4QixLQUE5QixFQUFxQyxJQUE3QyxFQUFrRCxLQUFLLFFBQUwsRUFBbEQsRUFEVTtLQUFkLENBRkosQ0FYTTtDQUFWLENBRkoiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICdoZWxsbyc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuaXBjLmNvbmZpZy5yYXdCdWZmZXI9dHJ1ZTtcbmlwYy5jb25maWcuZW5jb2Rpbmc9J2FzY2lpJztcblxuaXBjLmNvbm5lY3RUb05ldChcbiAgICAnd29ybGQnLFxuICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnIyMgY29ubmVjdGVkIHRvIHdvcmxkICMjJy5yYWluYm93LCBpcGMuY29uZmlnLmRlbGF5KTtcbiAgICAgICAgICAgICAgICBpcGMub2Yud29ybGQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2RhdGEnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSBmcm9tIHdvcmxkIDogJy5kZWJ1ZywgZGF0YSxkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG4iXX0=