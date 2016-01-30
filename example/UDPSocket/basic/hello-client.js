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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L2Jhc2ljL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFFBQUosQ0FDSSxJQURKO0FBRUksTUFGSixFQUdJLFlBQVU7QUFDTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksU0FESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsVUFBUixFQURVO0FBRVYsWUFBSSxHQUFKLENBQVEsc0JBQXNCLEtBQXRCLEVBQTZCLEtBQUssRUFBTCxDQUFRLFFBQVIsRUFBa0IsTUFBTSxLQUFOLEVBQWEsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFwRSxDQUZVO0tBQWQsQ0FGSixDQURNO0FBUU4sUUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJO0FBQ0ksaUJBQVUsV0FBVjtBQUNBLGNBQVUsSUFBSSxNQUFKLENBQVcsV0FBWDtLQUhsQixFQUtJLFNBTEosRUFNSTtBQUNJLFlBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLGlCQUFVLE9BQVY7S0FSUixFQVJNO0NBQVYsQ0FISjs7QUEyQkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFVEUCBDbGllbnQgaXMgcmVhbGx5IGEgVURQIHNlcnZlclxuICpcbiAqIERlZGljYXRlZCBVRFAgc29ja2V0cyBvbiB0aGUgc2FtZVxuICogbWFjaGluZSBjYW4gbm90IGJlIGJvdW5kIHRvIGluIHRoZVxuICogdHJhZGl0aW9uYWwgY2xpZW50L3NlcnZlciBtZXRob2RcbiAqXG4gKiBFdmVyeSBVRFAgc29ja2V0IGlzIGl0J3Mgb3duIFVEUCBzZXJ2ZXJcbiAqIEFuZCBzbyBtdXN0IGhhdmUgYSB1bmlxdWUgcG9ydCBvbiBpdHNcbiAqIG1hY2hpbmUsIHVubGlrZSBUQ1Agb3IgVW5peCBTb2NrdHNcbiAqIHdoaWNoIGNhbiBzaGFyZSBvbiB0aGUgc2FtZSBtYWNoaW5lLlxuICpcbiAqIFNpbmNlIHRoZXJlIGlzIG5vIG9wZW4gY2xpZW50IHNlcnZlclxuICogcmVsYXRpb25zaGlwLCB5b3Ugc2hvdWxkIHN0YXJ0IHdvcmxkXG4gKiBmaXJzdCBhbmQgdGhlbiBoZWxsby5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICA4MDAxLCAvL3dlIHNldCB0aGUgcG9ydCBoZXJlIGJlY2F1c2UgdGhlIHdvcmxkIHNlcnZlciBpcyBhbHJlYWR5IHVzaW5nIHRoZSBkZWZhdWx0IG9mIDgwMDAuIFNvIHdlIGNhbiBub3QgYmluZCB0byA4MDAwIHdoaWxlIHdvcmxkIGlzIHVzaW5nIGl0LlxuICAgICd1ZHA0JyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IERhdGEnKTtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gJy5kZWJ1ZywgZGF0YS5pZC52YXJpYWJsZSAsJyA6ICcuZGVidWcsIGRhdGEubWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgOiAnbG9jYWxob3N0JyxcbiAgICAgICAgICAgICAgICBwb3J0ICAgIDogaXBjLmNvbmZpZy5uZXR3b3JrUG9ydFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogJ0hlbGxvJ1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=