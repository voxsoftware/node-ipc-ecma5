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

ipc.connectTo('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('app.message', {
            id: ipc.config.id,
            message: 'hello'
        });
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('app.message', function (data) {
        ipc.log('got a message from world : '.debug, data);
    });
    ipc.of.world.on('kill.connection', function (data) {
        ipc.log('world requested kill.connection'.notice);
        ipc.disconnect('world');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvTXVsdGktQ2xpZW50LUJyb2FkY2FzdC9oZWxsby1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFNBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1QyxDQURNO0FBRU4sWUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FDSSxhQURKLEVBRUk7QUFDSSxnQkFBVSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ1YscUJBQVUsT0FBVjtTQUpSLEVBRk07S0FBVixDQUZKLENBRE07QUFjTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFlBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMEJBQTBCLE1BQTFCLENBQVIsQ0FETTtLQUFWLENBRkosQ0FkTTtBQW9CTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLGFBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLDhCQUE4QixLQUE5QixFQUFxQyxJQUE3QyxFQURVO0tBQWQsQ0FGSixDQXBCTTtBQTBCTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLGlCQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSxrQ0FBa0MsTUFBbEMsQ0FBUixDQURVO0FBRVYsWUFBSSxVQUFKLENBQWUsT0FBZixFQUZVO0tBQWQsQ0FGSixDQTFCTTtDQUFWLENBRkoiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqIFxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICogXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5jb25uZWN0VG8oXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdoZWxsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gd29ybGQgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2tpbGwuY29ubmVjdGlvbicsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCd3b3JsZCByZXF1ZXN0ZWQga2lsbC5jb25uZWN0aW9uJy5ub3RpY2UpO1xuICAgICAgICAgICAgICAgIGlwYy5kaXNjb25uZWN0KCd3b3JsZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG4iXX0=