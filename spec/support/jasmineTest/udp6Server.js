'use strict';

var ipc = require('../../../node-ipc');
var process = require('process');
var dieAfter = 30000;

//die after 60 seconds
setTimeout(function killServerProcess() {
    process.exit(0);
}, dieAfter);

ipc.config.id = 'udp6Server';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.config.networkPort = 8099;

ipc.serveNet('::1', 'udp6', function serverStarted() {
    ipc.server.on('message', function gotMessage(data, socket) {
        ipc.server.emit(socket, 'message', {
            id: ipc.config.id,
            message: 'I am UDP6 server!'
        });
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL3NwZWMvc3VwcG9ydC9qYXNtaW5lVGVzdC91ZHA2U2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU0sTUFBSSxRQUFRLG1CQUFSLENBQUo7QUFDTixJQUFNLFVBQVEsUUFBUSxTQUFSLENBQVI7QUFDTixJQUFNLFdBQVMsS0FBVDs7O0FBR04sV0FDSSxTQUFTLGlCQUFULEdBQTRCO0FBQ3hCLFlBQVEsSUFBUixDQUFhLENBQWIsRUFEd0I7Q0FBNUIsRUFHQSxRQUpKOztBQU9BLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsWUFBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsTUFBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFdBQVgsR0FBdUIsSUFBdkI7O0FBRUEsSUFBSSxRQUFKLENBQ0ksS0FESixFQUVJLE1BRkosRUFHSSxTQUFTLGFBQVQsR0FBd0I7QUFDcEIsUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBeUIsTUFBekIsRUFBZ0M7QUFDNUIsWUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxTQUZKLEVBR0k7QUFDSSxnQkFBVSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ1YscUJBQVUsbUJBQVY7U0FMUixFQUQ0QjtLQUFoQyxDQUZKLENBRG9CO0NBQXhCLENBSEo7O0FBcUJBLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoidWRwNlNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5jb25zdCBwcm9jZXNzPXJlcXVpcmUoJ3Byb2Nlc3MnKTtcbmNvbnN0IGRpZUFmdGVyPTMwMDAwO1xuXG4vL2RpZSBhZnRlciA2MCBzZWNvbmRzXG5zZXRUaW1lb3V0KFxuICAgIGZ1bmN0aW9uIGtpbGxTZXJ2ZXJQcm9jZXNzKCl7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9LFxuICAgIGRpZUFmdGVyXG4pO1xuXG5pcGMuY29uZmlnLmlkID0gJ3VkcDZTZXJ2ZXInO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcuc2lsZW50PXRydWU7XG5pcGMuY29uZmlnLm5ldHdvcmtQb3J0PTgwOTk7XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICAnOjoxJyxcbiAgICAndWRwNicsXG4gICAgZnVuY3Rpb24gc2VydmVyU3RhcnRlZCgpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gZ290TWVzc2FnZShkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogJ0kgYW0gVURQNiBzZXJ2ZXIhJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==