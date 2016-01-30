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

ipc.serveNet('udp4', function () {
    console.log(123);
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message from '.debug, data.id.variable, ' : '.debug, data.message.data);
        ipc.server.emit(socket, 'message', {
            id: ipc.config.id,
            message: data.message + ' world!'
        });
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L2Jhc2ljL3dvcmxkLXNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFFBQUosQ0FDSSxNQURKLEVBRUksWUFBVTtBQUNOLFlBQVEsR0FBUixDQUFZLEdBQVosRUFETTtBQUVOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxzQkFBc0IsS0FBdEIsRUFBNkIsS0FBSyxFQUFMLENBQVEsUUFBUixFQUFrQixNQUFNLEtBQU4sRUFBYSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQXBFLENBRGlCO0FBRWpCLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksU0FGSixFQUdJO0FBQ0ksZ0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHFCQUFVLEtBQUssT0FBTCxHQUFhLFNBQWI7U0FMbEIsRUFGaUI7S0FBckIsQ0FGSixDQUZNO0NBQVYsQ0FGSjs7QUF1QkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFVEUCBDbGllbnQgaXMgcmVhbGx5IGEgVURQIHNlcnZlclxuICpcbiAqIERlZGljYXRlZCBVRFAgc29ja2V0cyBvbiB0aGUgc2FtZVxuICogbWFjaGluZSBjYW4gbm90IGJlIGJvdW5kIHRvIGluIHRoZVxuICogdHJhZGl0aW9uYWwgY2xpZW50L3NlcnZlciBtZXRob2RcbiAqXG4gKiBFdmVyeSBVRFAgc29ja2V0IGlzIGl0J3Mgb3duIFVEUCBzZXJ2ZXJcbiAqIEFuZCBzbyBtdXN0IGhhdmUgYSB1bmlxdWUgcG9ydCBvbiBpdHNcbiAqIG1hY2hpbmUsIHVubGlrZSBUQ1Agb3IgVW5peCBTb2NrdHNcbiAqIHdoaWNoIGNhbiBzaGFyZSBvbiB0aGUgc2FtZSBtYWNoaW5lLlxuICpcbiAqIFNpbmNlIHRoZXJlIGlzIG5vIG9wZW4gY2xpZW50IHNlcnZlclxuICogcmVsYXRpb25zaGlwLCB5b3Ugc2hvdWxkIHN0YXJ0IHdvcmxkXG4gKiBmaXJzdCBhbmQgdGhlbiBoZWxsby5cbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICAndWRwNCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coMTIzKTtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gJy5kZWJ1ZywgZGF0YS5pZC52YXJpYWJsZSAsJyA6ICcuZGVidWcsIGRhdGEubWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBkYXRhLm1lc3NhZ2UrJyB3b3JsZCEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=