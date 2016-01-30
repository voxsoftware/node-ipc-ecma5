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

    console.log(ipc.of.world.destroy);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvYmFzaWMvaGVsbG8tY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBbUIsSUFBbkI7O0FBRUEsSUFBSSxTQUFKLENBQ0ksT0FESixFQUVJLFlBQVU7QUFDTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMkJBQTJCLE9BQTNCLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBNUMsQ0FETTtBQUVOLFlBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQ0ksYUFESixFQUVJO0FBQ0ksZ0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHFCQUFVLE9BQVY7U0FKUixFQUZNO0tBQVYsQ0FGSixDQURNO0FBY04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxZQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDBCQUEwQixNQUExQixDQUFSLENBRE07S0FBVixDQUZKLENBZE07QUFvQk4sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxhQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSw4QkFBOEIsS0FBOUIsRUFBcUMsSUFBN0MsRUFEVTtLQUFkLENBRkosQ0FwQk07O0FBMkJOLFlBQVEsR0FBUixDQUFZLElBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxPQUFiLENBQVosQ0EzQk07Q0FBVixDQUZKIiwiZmlsZSI6ImhlbGxvLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnaGVsbG8nO1xuaXBjLmNvbmZpZy5yZXRyeSA9IDEwMDA7XG5cbmlwYy5jb25uZWN0VG8oXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdoZWxsbydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gd29ybGQgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpcGMub2Yud29ybGQuZGVzdHJveSk7XG4gICAgfVxuKTtcbiJdfQ==