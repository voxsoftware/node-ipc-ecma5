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
ipc.config.tls = {
    rejectUnauthorized: false
};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLWxvY2FsLW9ubHkvaGVsbG8tY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxHQUFYLEdBQWU7QUFDWCx3QkFBbUIsS0FBbkI7Q0FESjs7QUFJQSxJQUFJLFlBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1QyxDQURNO0FBRU4sWUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FDSSxTQURKLEVBRUksT0FGSixFQUZNO0tBQVYsQ0FGSixDQURNO0FBV04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxZQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDBCQUEwQixNQUExQixDQUFSLENBRE07S0FBVixDQUZKLENBWE07QUFpQk4sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSw4QkFBOEIsS0FBOUIsRUFBcUMsSUFBN0MsRUFEVTtLQUFkLENBRkosQ0FqQk07Q0FBVixDQUZKIiwiZmlsZSI6ImhlbGxvLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnaGVsbG8nO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcudGxzPXtcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6ZmFsc2Vcbn07XG5cbmlwYy5jb25uZWN0VG9OZXQoXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSB3b3JsZCA6ICcuZGVidWcsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG4iXX0=