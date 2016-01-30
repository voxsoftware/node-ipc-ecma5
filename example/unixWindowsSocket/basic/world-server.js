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

ipc.serve(function () {
    ipc.server.on('app.message', function (data, socket) {
        //ipc.log('got a message from'.debug, (data.id).variable, (data.message).data);
        ipc.server.emit(socket, 'app.message', {
            id: ipc.config.id,
            message: data.message + ' world!'
        });
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvYmFzaWMvd29ybGQtc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxLQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxhQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjs7QUFFakIsWUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxhQUZKLEVBR0k7QUFDSSxnQkFBVSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ1YscUJBQVUsS0FBSyxPQUFMLEdBQWEsU0FBYjtTQUxsQixFQUZpQjtLQUFyQixDQUZKLENBRE07Q0FBVixDQURKOztBQXFCQSxJQUFJLE1BQUosQ0FBVyxLQUFYIiwiZmlsZSI6IndvcmxkLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKiBcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqIFxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICd3b3JsZCc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuXG5pcGMuc2VydmUoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgLy9pcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20nLmRlYnVnLCAoZGF0YS5pZCkudmFyaWFibGUsIChkYXRhLm1lc3NhZ2UpLmRhdGEpO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnYXBwLm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBkYXRhLm1lc3NhZ2UrJyB3b3JsZCEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=