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
ipc.config.networkHost = 'localhost';
ipc.config.tls = {
    public: __dirname + '/../../../local-node-ipc-certs/server.pub',
    private: __dirname + '/../../../local-node-ipc-certs/private/server.key',
    dhparam: __dirname + '/../../../local-node-ipc-certs/private/dhparam.pem',
    requestCert: true,
    rejectUnauthorized: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLW1vc3Qtc2VjdXJlL3dvcmxkLXNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsV0FBWCxHQUF1QixXQUF2QjtBQUNBLElBQUksTUFBSixDQUFXLEdBQVgsR0FBZTtBQUNYLFlBQVEsWUFBVSwyQ0FBVjtBQUNSLGFBQVMsWUFBVSxtREFBVjtBQUNULGFBQVMsWUFBVSxvREFBVjtBQUNULGlCQUFhLElBQWI7QUFDQSx3QkFBbUIsSUFBbkI7QUFDQSx3QkFBb0IsQ0FDaEIsWUFBVSwyQ0FBVixDQURKO0NBTko7O0FBV0EsSUFBSSxRQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxtQkFBbUIsS0FBbkIsRUFBMEIsSUFBbEMsRUFEaUI7QUFFakIsWUFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxTQUZKLEVBR0ksT0FBSyxTQUFMLENBSEosQ0FGaUI7S0FBckIsQ0FGSixDQURNOztBQWFOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxxQkFESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFEaUI7S0FBckIsQ0FGSixDQWJNO0NBQVYsQ0FESjs7QUF5QkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLm5ldHdvcmtIb3N0PSdsb2NhbGhvc3QnO1xuaXBjLmNvbmZpZy50bHM9e1xuICAgIHB1YmxpYzogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvc2VydmVyLnB1YicsXG4gICAgcHJpdmF0ZTogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvcHJpdmF0ZS9zZXJ2ZXIua2V5JyxcbiAgICBkaHBhcmFtOiBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9wcml2YXRlL2RocGFyYW0ucGVtJyxcbiAgICByZXF1ZXN0Q2VydDogdHJ1ZSxcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6dHJ1ZSxcbiAgICB0cnVzdGVkQ29ubmVjdGlvbnM6IFtcbiAgICAgICAgX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvY2xpZW50LnB1YidcbiAgICBdXG59O1xuXG5pcGMuc2VydmVOZXQoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIDogJy5kZWJ1ZywgZGF0YSk7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnc29ja2V0LmRpc2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19