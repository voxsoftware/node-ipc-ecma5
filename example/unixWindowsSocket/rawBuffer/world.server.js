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
ipc.config.rawBuffer = true;
ipc.config.encoding = 'ascii';

ipc.serve(function () {
    ipc.server.on('connect', function (socket) {
        ipc.server.emit(socket, 'hello');
    });

    ipc.server.on('data', function (data, socket) {
        ipc.log('got a message'.debug, data, data.toString());
        ipc.server.emit(socket, 'goodbye');
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvcmF3QnVmZmVyL3dvcmxkLnNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsU0FBWCxHQUFxQixJQUFyQjtBQUNBLElBQUksTUFBSixDQUFXLFFBQVgsR0FBb0IsT0FBcEI7O0FBRUEsSUFBSSxLQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxTQURKLEVBRUksVUFBUyxNQUFULEVBQWdCO0FBQ1osWUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxPQUZKLEVBRFk7S0FBaEIsQ0FGSixDQURNOztBQVdOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxNQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxnQkFBZ0IsS0FBaEIsRUFBdUIsSUFBL0IsRUFBb0MsS0FBSyxRQUFMLEVBQXBDLEVBRGlCO0FBRWpCLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksU0FGSixFQUZpQjtLQUFyQixDQUZKLENBWE07Q0FBVixDQURKOztBQXlCQSxJQUFJLE1BQUosQ0FBVyxLQUFYIiwiZmlsZSI6IndvcmxkLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnd29ybGQnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcucmF3QnVmZmVyPXRydWU7XG5pcGMuY29uZmlnLmVuY29kaW5nPSdhc2NpaSc7XG5cbmlwYy5zZXJ2ZShcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdkYXRhJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlJy5kZWJ1ZywgZGF0YSxkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnZ29vZGJ5ZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==