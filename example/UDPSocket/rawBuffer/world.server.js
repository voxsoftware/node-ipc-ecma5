'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * UDP Client is really a UDP server
 *
 * Dedicated UDP sockets on the same
 * machine can not be bound to in the
 * traditional client/server method
 *
 * Every UDP socket is it's own UDP server
 * And so must have a unique port on its
 * machine, unlike TCP or Unix Sockts
 * which can share on the same machine.
 *
 * Since there is no open client server
 * relationship, you should start world
 * first and then hello.
 *
 ***************************************/

ipc.config.id = 'world';
ipc.config.retry = 1500;
ipc.config.rawBuffer = true;
ipc.config.encoding = 'ascii';

ipc.serveNet('udp4', function () {
    ipc.server.on('data', function (data, socket) {
        ipc.log('got a message'.debug, data, data.toString());
        ipc.server.emit(socket, 'goodbye');
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L3Jhd0J1ZmZlci93b3JsZC5zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkosSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxTQUFYLEdBQXFCLElBQXJCO0FBQ0EsSUFBSSxNQUFKLENBQVcsUUFBWCxHQUFvQixPQUFwQjs7QUFFQSxJQUFJLFFBQUosQ0FDSSxNQURKLEVBRUksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxNQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxnQkFBZ0IsS0FBaEIsRUFBdUIsSUFBL0IsRUFBb0MsS0FBSyxRQUFMLEVBQXBDLEVBRGlCO0FBRWpCLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksU0FGSixFQUZpQjtLQUFyQixDQUZKLENBRE07Q0FBVixDQUZKOztBQWdCQSxJQUFJLE1BQUosQ0FBVyxLQUFYIiwiZmlsZSI6IndvcmxkLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogVURQIENsaWVudCBpcyByZWFsbHkgYSBVRFAgc2VydmVyXG4gKlxuICogRGVkaWNhdGVkIFVEUCBzb2NrZXRzIG9uIHRoZSBzYW1lXG4gKiBtYWNoaW5lIGNhbiBub3QgYmUgYm91bmQgdG8gaW4gdGhlXG4gKiB0cmFkaXRpb25hbCBjbGllbnQvc2VydmVyIG1ldGhvZFxuICpcbiAqIEV2ZXJ5IFVEUCBzb2NrZXQgaXMgaXQncyBvd24gVURQIHNlcnZlclxuICogQW5kIHNvIG11c3QgaGF2ZSBhIHVuaXF1ZSBwb3J0IG9uIGl0c1xuICogbWFjaGluZSwgdW5saWtlIFRDUCBvciBVbml4IFNvY2t0c1xuICogd2hpY2ggY2FuIHNoYXJlIG9uIHRoZSBzYW1lIG1hY2hpbmUuXG4gKlxuICogU2luY2UgdGhlcmUgaXMgbm8gb3BlbiBjbGllbnQgc2VydmVyXG4gKiByZWxhdGlvbnNoaXAsIHlvdSBzaG91bGQgc3RhcnQgd29ybGRcbiAqIGZpcnN0IGFuZCB0aGVuIGhlbGxvLlxuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnd29ybGQnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcucmF3QnVmZmVyPXRydWU7XG5pcGMuY29uZmlnLmVuY29kaW5nPSdhc2NpaSc7XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICAndWRwNCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdkYXRhJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlJy5kZWJ1ZywgZGF0YSxkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnZ29vZGJ5ZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==