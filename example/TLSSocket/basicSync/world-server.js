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
ipc.config.sync = true;
ipc.config.tls = {
    public: __dirname + '/../../../local-node-ipc-certs/server.pub',
    private: __dirname + '/../../../local-node-ipc-certs/private/server.key'
};

ipc.serveNet(function () {
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message : '.debug, data);
        setTimeout(function () {
            ipc.server.emit(socket, 'message', data + ' world!');
        }, 3000);
    });

    ipc.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljU3luYy93b3JsZC1zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgsR0FBaUIsSUFBakI7QUFDQSxJQUFJLE1BQUosQ0FBVyxHQUFYLEdBQWU7QUFDWCxZQUFRLFlBQVUsMkNBQVY7QUFDUixhQUFTLFlBQVUsbURBQVY7Q0FGYjs7QUFLQSxJQUFJLFFBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLFlBQUksR0FBSixDQUFRLG1CQUFtQixLQUFuQixFQUEwQixJQUFsQyxFQURpQjtBQUVqQixtQkFDSSxZQUFVO0FBQ04sZ0JBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksU0FGSixFQUdJLE9BQUssU0FBTCxDQUhKLENBRE07U0FBVixFQU9BLElBUkosRUFGaUI7S0FBckIsQ0FGSixDQURNOztBQWtCTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0kscUJBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBRGlCO0tBQXJCLENBRkosQ0FsQk07Q0FBVixDQURKOztBQThCQSxJQUFJLE1BQUosQ0FBVyxLQUFYIiwiZmlsZSI6IndvcmxkLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnd29ybGQnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcuc3luYz0gdHJ1ZTtcbmlwYy5jb25maWcudGxzPXtcbiAgICBwdWJsaWM6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3NlcnZlci5wdWInLFxuICAgIHByaXZhdGU6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3ByaXZhdGUvc2VydmVyLmtleSdcbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSxzb2NrZXQpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDMwMDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnc29ja2V0LmRpc2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19