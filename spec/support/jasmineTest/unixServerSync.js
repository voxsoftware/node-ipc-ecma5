'use strict';

var ipc = require('../../../node-ipc');
var process = require('process');
var dieAfter = 30000;
var messageDelay = 900;

//die after 60 seconds
setTimeout(function killServerProcess() {
    process.exit(0);
}, dieAfter);

ipc.config.id = 'unixServerSync';
ipc.config.retry = 1500;
ipc.config.silent = true;

ipc.serve(function serverStarted() {
    var ready = false;

    ipc.server.on('message', function gotMessage(data, socket) {
        if (ready) {
            ipc.server.emit(socket, 'message', {
                id: ipc.config.id,
                message: 'Error, client not wating for server response before sending request.'
            });
        }
        ready = true;

        setTimeout(function delayedMessage() {
            ready = false;
            ipc.server.emit(socket, 'message', {
                id: ipc.config.id,
                message: 'Response from unix server'
            });
        }, messageDelay);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL3NwZWMvc3VwcG9ydC9qYXNtaW5lVGVzdC91bml4U2VydmVyU3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNLE1BQUksUUFBUSxtQkFBUixDQUFKO0FBQ04sSUFBTSxVQUFRLFFBQVEsU0FBUixDQUFSO0FBQ04sSUFBTSxXQUFTLEtBQVQ7QUFDTixJQUFNLGVBQWEsR0FBYjs7O0FBR04sV0FDSSxTQUFTLGlCQUFULEdBQTRCO0FBQ3hCLFlBQVEsSUFBUixDQUFhLENBQWIsRUFEd0I7Q0FBNUIsRUFHQSxRQUpKOztBQU9BLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsZ0JBQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLE1BQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxLQUFKLENBQ0ksU0FBUyxhQUFULEdBQXdCO0FBQ3BCLFFBQUksUUFBTSxLQUFOLENBRGdCOztBQUdwQixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksU0FESixFQUVJLFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUF5QixNQUF6QixFQUFnQztBQUM1QixZQUFHLEtBQUgsRUFBUztBQUNMLGdCQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFHSTtBQUNJLG9CQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVix5QkFBVSxzRUFBVjthQUxSLEVBREs7U0FBVDtBQVVBLGdCQUFNLElBQU4sQ0FYNEI7O0FBYTVCLG1CQUNJLFNBQVMsY0FBVCxHQUF5QjtBQUNyQixvQkFBTSxLQUFOLENBRHFCO0FBRXJCLGdCQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFHSTtBQUNJLG9CQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVix5QkFBVSwyQkFBVjthQUxSLEVBRnFCO1NBQXpCLEVBV0EsWUFaSixFQWI0QjtLQUFoQyxDQUZKLENBSG9CO0NBQXhCLENBREo7O0FBdUNBLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoidW5peFNlcnZlclN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuY29uc3QgcHJvY2Vzcz1yZXF1aXJlKCdwcm9jZXNzJyk7XG5jb25zdCBkaWVBZnRlcj0zMDAwMDtcbmNvbnN0IG1lc3NhZ2VEZWxheT05MDA7XG5cbi8vZGllIGFmdGVyIDYwIHNlY29uZHNcbnNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24ga2lsbFNlcnZlclByb2Nlc3MoKXtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDApO1xuICAgIH0sXG4gICAgZGllQWZ0ZXJcbik7XG5cbmlwYy5jb25maWcuaWQgPSAndW5peFNlcnZlclN5bmMnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcuc2lsZW50PXRydWU7XG5cbmlwYy5zZXJ2ZShcbiAgICBmdW5jdGlvbiBzZXJ2ZXJTdGFydGVkKCl7XG4gICAgICAgIGxldCByZWFkeT1mYWxzZTtcblxuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gZ290TWVzc2FnZShkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaWYocmVhZHkpe1xuICAgICAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdFcnJvciwgY2xpZW50IG5vdCB3YXRpbmcgZm9yIHNlcnZlciByZXNwb25zZSBiZWZvcmUgc2VuZGluZyByZXF1ZXN0LidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZHk9dHJ1ZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGF5ZWRNZXNzYWdlKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeT1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnUmVzcG9uc2UgZnJvbSB1bml4IHNlcnZlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGVsYXlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19