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
ipc.config.tls = {
    public: __dirname + '/../../../local-node-ipc-certs/server.pub',
    private: __dirname + '/../../../local-node-ipc-certs/private/server.key',
    dhparam: __dirname + '/../../../local-node-ipc-certs/private/dhparam.pem',
    requestCert: true,
    rejectUnauthorized: false,
    trustedConnections: [__dirname + '/../../../local-node-ipc-certs/client.pub']
};

ipc.serveNet(function () {
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message : '.debug, data);
        ipc.server.emit(socket, 'message', data + ' world!');
    });

    ipc.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLW1vcmUtc2VjdXJlL3dvcmxkLXNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsR0FBWCxHQUFlO0FBQ1gsWUFBUSxZQUFVLDJDQUFWO0FBQ1IsYUFBUyxZQUFVLG1EQUFWO0FBQ1QsYUFBUyxZQUFVLG9EQUFWO0FBQ1QsaUJBQWEsSUFBYjtBQUNBLHdCQUFtQixLQUFuQjtBQUNBLHdCQUFvQixDQUNoQixZQUFVLDJDQUFWLENBREo7Q0FOSjs7QUFXQSxJQUFJLFFBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLFlBQUksR0FBSixDQUFRLG1CQUFtQixLQUFuQixFQUEwQixJQUFsQyxFQURpQjtBQUVqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFHSSxPQUFLLFNBQUwsQ0FISixDQUZpQjtLQUFyQixDQUZKLENBRE07O0FBYU4sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLHFCQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixnQkFBUSxHQUFSLENBQVksU0FBWixFQURpQjtLQUFyQixDQUZKLENBYk07Q0FBVixDQURKOztBQXlCQSxJQUFJLE1BQUosQ0FBVyxLQUFYIiwiZmlsZSI6IndvcmxkLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnd29ybGQnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcudGxzPXtcbiAgICBwdWJsaWM6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3NlcnZlci5wdWInLFxuICAgIHByaXZhdGU6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3ByaXZhdGUvc2VydmVyLmtleScsXG4gICAgZGhwYXJhbTogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvcHJpdmF0ZS9kaHBhcmFtLnBlbScsXG4gICAgcmVxdWVzdENlcnQ6IHRydWUsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOmZhbHNlLFxuICAgIHRydXN0ZWRDb25uZWN0aW9uczogW1xuICAgICAgICBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9jbGllbnQucHViJ1xuICAgIF1cbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSxzb2NrZXQpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhKycgd29ybGQhJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdzb2NrZXQuZGlzY29ubmVjdGVkJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=