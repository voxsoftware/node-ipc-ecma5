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
ipc.config.tls = {
    public: __dirname + '/../../../local-node-ipc-certs/server.pub',
    private: __dirname + '/../../../local-node-ipc-certs/private/server.key'
};

var messages = {
    goodbye: false,
    hello: false
};

ipc.serveNet(function () {
    ipc.server.on('app.message', function (data, socket) {
        ipc.log('got a message from'.debug, data.id.variable, data.message.data);
        messages[data.id] = true;
        ipc.server.emit(socket, 'app.message', {
            id: ipc.config.id,
            message: data.message + ' world!'
        });

        if (messages.hello && messages.goodbye) {
            ipc.log('got all required events, telling clients to kill connection'.good);
            ipc.server.broadcast('kill.connection', {
                id: ipc.config.id
            });
        }
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3QtYmFzaWMvd29ybGQtc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7O0FBU0osSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxHQUFYLEdBQWU7QUFDWCxZQUFRLFlBQVUsMkNBQVY7QUFDUixhQUFTLFlBQVUsbURBQVY7Q0FGYjs7QUFLQSxJQUFJLFdBQVM7QUFDVCxhQUFRLEtBQVI7QUFDQSxXQUFNLEtBQU47Q0FGQTs7QUFLSixJQUFJLFFBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLGFBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLFlBQUksR0FBSixDQUFRLHFCQUFxQixLQUFyQixFQUE0QixJQUFDLENBQUssRUFBTCxDQUFTLFFBQVYsRUFBb0IsSUFBQyxDQUFLLE9BQUwsQ0FBYyxJQUFmLENBQXhELENBRGlCO0FBRWpCLGlCQUFTLEtBQUssRUFBTCxDQUFULEdBQWtCLElBQWxCLENBRmlCO0FBR2pCLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksYUFGSixFQUdJO0FBQ0ksZ0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHFCQUFVLEtBQUssT0FBTCxHQUFhLFNBQWI7U0FMbEIsRUFIaUI7O0FBWWpCLFlBQUcsU0FBUyxLQUFULElBQWtCLFNBQVMsT0FBVCxFQUFpQjtBQUNsQyxnQkFBSSxHQUFKLENBQVEsOERBQThELElBQTlELENBQVIsQ0FEa0M7QUFFbEMsZ0JBQUksTUFBSixDQUFXLFNBQVgsQ0FDSSxpQkFESixFQUVJO0FBQ0ksb0JBQUcsSUFBSSxNQUFKLENBQVcsRUFBWDthQUhYLEVBRmtDO1NBQXRDO0tBWkosQ0FGSixDQURNO0NBQVYsQ0FESjs7QUFpQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ3dvcmxkJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnRscz17XG4gICAgcHVibGljOiBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9zZXJ2ZXIucHViJyxcbiAgICBwcml2YXRlOiBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9wcml2YXRlL3NlcnZlci5rZXknXG59O1xuXG52YXIgbWVzc2FnZXM9e1xuICAgIGdvb2RieWU6ZmFsc2UsXG4gICAgaGVsbG86ZmFsc2Vcbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMuc2VydmVyLm9uKFxuICAgICAgICAgICAgJ2FwcC5tZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20nLmRlYnVnLCAoZGF0YS5pZCkudmFyaWFibGUsIChkYXRhLm1lc3NhZ2UpLmRhdGEpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzW2RhdGEuaWRdPXRydWU7XG4gICAgICAgICAgICAgICAgaXBjLnNlcnZlci5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IGRhdGEubWVzc2FnZSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlcy5oZWxsbyAmJiBtZXNzYWdlcy5nb29kYnllKXtcbiAgICAgICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGFsbCByZXF1aXJlZCBldmVudHMsIHRlbGxpbmcgY2xpZW50cyB0byBraWxsIGNvbm5lY3Rpb24nLmdvb2QpO1xuICAgICAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmJyb2FkY2FzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdraWxsLmNvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOmlwYy5jb25maWcuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcblxuXG5cblxuaXBjLnNlcnZlci5zdGFydCgpO1xuIl19