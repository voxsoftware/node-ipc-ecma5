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
ipc.config.maxConnections = 1;

ipc.serveNet(function () {
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message : '.debug, data);
        ipc.server.emit(socket, 'message', data + ' world!');
    });

    ipc.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
});

ipc.server.on('error', function (err) {
    ipc.log('Got an ERROR!'.warn, err);
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L2Jhc2ljL3dvcmxkLXNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsY0FBWCxHQUEwQixDQUExQjs7QUFFQSxJQUFJLFFBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLFlBQUksR0FBSixDQUFRLG1CQUFtQixLQUFuQixFQUEwQixJQUFsQyxFQURpQjtBQUVqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFHSSxPQUFLLFNBQUwsQ0FISixDQUZpQjtLQUFyQixDQUZKLENBRE07O0FBYU4sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLHFCQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixnQkFBUSxHQUFSLENBQVksU0FBWixFQURpQjtLQUFyQixDQUZKLENBYk07Q0FBVixDQURKOztBQXVCQSxJQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksT0FESixFQUVJLFVBQVMsR0FBVCxFQUFhO0FBQ1QsUUFBSSxHQUFKLENBQVEsZ0JBQWdCLElBQWhCLEVBQXFCLEdBQTdCLEVBRFM7Q0FBYixDQUZKOztBQU9BLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoid29ybGQtc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICd3b3JsZCc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuaXBjLmNvbmZpZy5tYXhDb25uZWN0aW9ucz0xO1xuXG5pcGMuc2VydmVOZXQoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIDogJy5kZWJ1ZywgZGF0YSk7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnc29ja2V0LmRpc2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5pcGMuc2VydmVyLm9uKFxuICAgICdlcnJvcicsXG4gICAgZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgaXBjLmxvZygnR290IGFuIEVSUk9SIScud2FybixlcnIpO1xuICAgIH1cbik7XG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==