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

ipc.connectToNet('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('message', 'hello');
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('message', function (data) {
        ipc.log('got a message from world : '.debug, data);
    });
});

console.log(ipc);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L2Jhc2ljL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCOztBQUVBLElBQUksWUFBSixDQUNJLE9BREosRUFFSSxZQUFVO0FBQ04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDJCQUEyQixPQUEzQixFQUFvQyxJQUFJLE1BQUosQ0FBVyxLQUFYLENBQTVDLENBRE07QUFFTixZQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLFNBREosRUFFSSxPQUZKLEVBRk07S0FBVixDQUZKLENBRE07QUFXTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFlBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMEJBQTBCLE1BQTFCLENBQVIsQ0FETTtLQUFWLENBRkosQ0FYTTtBQWlCTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLDhCQUE4QixLQUE5QixFQUFxQyxJQUE3QyxFQURVO0tBQWQsQ0FGSixDQWpCTTtDQUFWLENBRko7O0FBNEJBLFFBQVEsR0FBUixDQUFZLEdBQVoiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqIFxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICogXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5jb25uZWN0VG9OZXQoXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSB3b3JsZCA6ICcuZGVidWcsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cbmNvbnNvbGUubG9nKGlwYyk7XG4iXX0=