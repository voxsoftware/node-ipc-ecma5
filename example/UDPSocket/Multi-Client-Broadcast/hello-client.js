'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 * 
 * Since there is no client relationship
 * with UDP sockets sockets are not kept 
 * open.
 * 
 * This means the order sockets are opened
 * is important.
 * 
 * Start World first. Then you can start 
 * hello or goodbye in any order you
 * choose.
 * 
 * *************************************/

ipc.config.id = 'hello';
ipc.config.retry = 1500;

ipc.serveNet(8001, //we set the port here because the world server is already using the default of 8000. So we can not bind to 8000 while world is using it.
'udp4', function () {
    ipc.server.on('message', function (data) {
        ipc.log('got Data');
        ipc.log('got a message from '.debug, data.id.variable, ' : '.debug, data.message.data);
    });
    ipc.server.emit({
        address: 'localhost',
        port: ipc.config.networkPort
    }, 'message', {
        id: ipc.config.id,
        message: 'Hello'
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3QvaGVsbG8tY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkosSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxRQUFKLENBQ0ksSUFESjtBQUVJLE1BRkosRUFHSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLFVBQVIsRUFEVTtBQUVWLFlBQUksR0FBSixDQUFRLHNCQUFzQixLQUF0QixFQUE2QixLQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE1BQU0sS0FBTixFQUFhLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBcEUsQ0FGVTtLQUFkLENBRkosQ0FETTtBQVFOLFFBQUksTUFBSixDQUFXLElBQVgsQ0FDSTtBQUNJLGlCQUFVLFdBQVY7QUFDQSxjQUFVLElBQUksTUFBSixDQUFXLFdBQVg7S0FIbEIsRUFLSSxTQUxKLEVBTUk7QUFDSSxZQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVixpQkFBVSxPQUFWO0tBUlIsRUFSTTtDQUFWLENBSEo7O0FBMkJBLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqIFxuICogU2luY2UgdGhlcmUgaXMgbm8gY2xpZW50IHJlbGF0aW9uc2hpcFxuICogd2l0aCBVRFAgc29ja2V0cyBzb2NrZXRzIGFyZSBub3Qga2VwdCBcbiAqIG9wZW4uXG4gKiBcbiAqIFRoaXMgbWVhbnMgdGhlIG9yZGVyIHNvY2tldHMgYXJlIG9wZW5lZFxuICogaXMgaW1wb3J0YW50LlxuICogXG4gKiBTdGFydCBXb3JsZCBmaXJzdC4gVGhlbiB5b3UgY2FuIHN0YXJ0IFxuICogaGVsbG8gb3IgZ29vZGJ5ZSBpbiBhbnkgb3JkZXIgeW91XG4gKiBjaG9vc2UuXG4gKiBcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICA4MDAxLCAvL3dlIHNldCB0aGUgcG9ydCBoZXJlIGJlY2F1c2UgdGhlIHdvcmxkIHNlcnZlciBpcyBhbHJlYWR5IHVzaW5nIHRoZSBkZWZhdWx0IG9mIDgwMDAuIFNvIHdlIGNhbiBub3QgYmluZCB0byA4MDAwIHdoaWxlIHdvcmxkIGlzIHVzaW5nIGl0LlxuICAgICd1ZHA0JyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IERhdGEnKTtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gJy5kZWJ1ZywgZGF0YS5pZC52YXJpYWJsZSAsJyA6ICcuZGVidWcsIGRhdGEubWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgOiAnbG9jYWxob3N0JyxcbiAgICAgICAgICAgICAgICBwb3J0ICAgIDogaXBjLmNvbmZpZy5uZXR3b3JrUG9ydFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogJ0hlbGxvJ1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=