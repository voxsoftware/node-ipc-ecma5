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
    ipc.server.on('connect', function (socket) {
        console.log('connection detected');
        ipc.server.emit(socket, 'hello');
    });

    ipc.server.on('data', function (data, socket) {
        ipc.log('got a message'.debug, data, data.toString());
        ipc.server.emit(socket, 'goodbye');
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L3Jhd0J1ZmZlci1vbmx5LXdvcmtzLXdpdGgtbW9zdC1zZWN1cmUvd29ybGQuc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxTQUFYLEdBQXFCLElBQXJCO0FBQ0EsSUFBSSxNQUFKLENBQVcsUUFBWCxHQUFvQixPQUFwQjtBQUNBLElBQUksTUFBSixDQUFXLFdBQVgsR0FBdUIsV0FBdkI7O0FBRUEsSUFBSSxNQUFKLENBQVcsR0FBWCxHQUFlO0FBQ1gsWUFBUSxZQUFVLDJDQUFWO0FBQ1IsYUFBUyxZQUFVLG1EQUFWO0FBQ1QsYUFBUyxZQUFVLG9EQUFWO0FBQ1QsaUJBQWEsSUFBYjtBQUNBLHdCQUFtQixJQUFuQjtBQUNBLHdCQUFvQixDQUNoQixZQUFVLDJDQUFWLENBREo7Q0FOSjs7QUFXQSxJQUFJLFFBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLFNBREosRUFFSSxVQUFTLE1BQVQsRUFBZ0I7QUFDWixnQkFBUSxHQUFSLENBQVkscUJBQVosRUFEWTtBQUVaLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksT0FGSixFQUZZO0tBQWhCLENBRkosQ0FETTs7QUFZTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksTUFESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsWUFBSSxHQUFKLENBQVEsZ0JBQWdCLEtBQWhCLEVBQXVCLElBQS9CLEVBQW9DLEtBQUssUUFBTCxFQUFwQyxFQURpQjtBQUVqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFGaUI7S0FBckIsQ0FGSixDQVpNO0NBQVYsQ0FESjs7QUEwQkEsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnJhd0J1ZmZlcj10cnVlO1xuaXBjLmNvbmZpZy5lbmNvZGluZz0nYXNjaWknO1xuaXBjLmNvbmZpZy5uZXR3b3JrSG9zdD0nbG9jYWxob3N0JztcblxuaXBjLmNvbmZpZy50bHM9e1xuICAgIHB1YmxpYzogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvc2VydmVyLnB1YicsXG4gICAgcHJpdmF0ZTogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvcHJpdmF0ZS9zZXJ2ZXIua2V5JyxcbiAgICBkaHBhcmFtOiBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9wcml2YXRlL2RocGFyYW0ucGVtJyxcbiAgICByZXF1ZXN0Q2VydDogdHJ1ZSxcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6dHJ1ZSxcbiAgICB0cnVzdGVkQ29ubmVjdGlvbnM6IFtcbiAgICAgICAgX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvY2xpZW50LnB1YidcbiAgICBdXG59O1xuXG5pcGMuc2VydmVOZXQoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHNvY2tldCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb24gZGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdkYXRhJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlJy5kZWJ1ZywgZGF0YSxkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnZ29vZGJ5ZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==