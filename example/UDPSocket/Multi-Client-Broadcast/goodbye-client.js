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

ipc.config.id = 'goodbye';
ipc.config.retry = 1500;

ipc.serveNet(8002, //we set the port here because the hello client and world server are already using the default of 8000 and the port 8001. So we can not bind to those while hello and world are connected to them.
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
        message: 'Goodbye'
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3QvZ29vZGJ5ZS1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLFNBQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFFBQUosQ0FDSSxJQURKO0FBRUksTUFGSixFQUdJLFlBQVU7QUFDTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksU0FESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsVUFBUixFQURVO0FBRVYsWUFBSSxHQUFKLENBQVEsc0JBQXNCLEtBQXRCLEVBQTZCLEtBQUssRUFBTCxDQUFRLFFBQVIsRUFBa0IsTUFBTSxLQUFOLEVBQWEsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFwRSxDQUZVO0tBQWQsQ0FGSixDQURNO0FBUU4sUUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJO0FBQ0ksaUJBQVUsV0FBVjtBQUNBLGNBQVUsSUFBSSxNQUFKLENBQVcsV0FBWDtLQUhsQixFQUtJLFNBTEosRUFNSTtBQUNJLFlBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLGlCQUFVLFNBQVY7S0FSUixFQVJNO0NBQVYsQ0FISjs7QUEyQkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJnb29kYnllLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKiBcbiAqIFNpbmNlIHRoZXJlIGlzIG5vIGNsaWVudCByZWxhdGlvbnNoaXBcbiAqIHdpdGggVURQIHNvY2tldHMgc29ja2V0cyBhcmUgbm90IGtlcHQgXG4gKiBvcGVuLlxuICogXG4gKiBUaGlzIG1lYW5zIHRoZSBvcmRlciBzb2NrZXRzIGFyZSBvcGVuZWRcbiAqIGlzIGltcG9ydGFudC5cbiAqIFxuICogU3RhcnQgV29ybGQgZmlyc3QuIFRoZW4geW91IGNhbiBzdGFydCBcbiAqIGhlbGxvIG9yIGdvb2RieWUgaW4gYW55IG9yZGVyIHlvdVxuICogY2hvb3NlLlxuICogXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2dvb2RieWUnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcblxuaXBjLnNlcnZlTmV0KFxuICAgIDgwMDIsIC8vd2Ugc2V0IHRoZSBwb3J0IGhlcmUgYmVjYXVzZSB0aGUgaGVsbG8gY2xpZW50IGFuZCB3b3JsZCBzZXJ2ZXIgYXJlIGFscmVhZHkgdXNpbmcgdGhlIGRlZmF1bHQgb2YgODAwMCBhbmQgdGhlIHBvcnQgODAwMS4gU28gd2UgY2FuIG5vdCBiaW5kIHRvIHRob3NlIHdoaWxlIGhlbGxvIGFuZCB3b3JsZCBhcmUgY29ubmVjdGVkIHRvIHRoZW0uXG4gICAgJ3VkcDQnLFxuICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgRGF0YScpO1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSAnLmRlYnVnLCBkYXRhLmlkLnZhcmlhYmxlICwnIDogJy5kZWJ1ZywgZGF0YS5tZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA6ICdsb2NhbGhvc3QnLFxuICAgICAgICAgICAgICAgIHBvcnQgICAgOiBpcGMuY29uZmlnLm5ldHdvcmtQb3J0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnR29vZGJ5ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19