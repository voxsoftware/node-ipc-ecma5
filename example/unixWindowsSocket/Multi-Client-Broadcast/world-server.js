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

var messages = {
    goodbye: false,
    hello: false
};

ipc.serve(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvTXVsdGktQ2xpZW50LUJyb2FkY2FzdC93b3JsZC1zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFdBQVM7QUFDVCxhQUFRLEtBQVI7QUFDQSxXQUFNLEtBQU47Q0FGQTs7QUFLSixJQUFJLEtBQUosQ0FDSSxZQUFVO0FBQ04sUUFBSSxNQUFKLENBQVcsRUFBWCxDQUNJLGFBREosRUFFSSxVQUFTLElBQVQsRUFBYyxNQUFkLEVBQXFCO0FBQ2pCLFlBQUksR0FBSixDQUFRLHFCQUFxQixLQUFyQixFQUE0QixJQUFDLENBQUssRUFBTCxDQUFTLFFBQVYsRUFBb0IsSUFBQyxDQUFLLE9BQUwsQ0FBYyxJQUFmLENBQXhELENBRGlCO0FBRWpCLGlCQUFTLEtBQUssRUFBTCxDQUFULEdBQWtCLElBQWxCLENBRmlCO0FBR2pCLFlBQUksTUFBSixDQUFXLElBQVgsQ0FDSSxNQURKLEVBRUksYUFGSixFQUdJO0FBQ0ksZ0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHFCQUFVLEtBQUssT0FBTCxHQUFhLFNBQWI7U0FMbEIsRUFIaUI7O0FBWWpCLFlBQUcsU0FBUyxLQUFULElBQWtCLFNBQVMsT0FBVCxFQUFpQjtBQUNsQyxnQkFBSSxHQUFKLENBQVEsOERBQThELElBQTlELENBQVIsQ0FEa0M7QUFFbEMsZ0JBQUksTUFBSixDQUFXLFNBQVgsQ0FDSSxpQkFESixFQUVJO0FBQ0ksb0JBQUcsSUFBSSxNQUFKLENBQVcsRUFBWDthQUhYLEVBRmtDO1NBQXRDO0tBWkosQ0FGSixDQURNO0NBQVYsQ0FESjs7QUFpQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICogXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKiBcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnd29ybGQnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcblxudmFyIG1lc3NhZ2VzPXtcbiAgICBnb29kYnllOmZhbHNlLFxuICAgIGhlbGxvOmZhbHNlXG59O1xuXG5pcGMuc2VydmUoXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSBmcm9tJy5kZWJ1ZywgKGRhdGEuaWQpLnZhcmlhYmxlLCAoZGF0YS5tZXNzYWdlKS5kYXRhKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1tkYXRhLmlkXT10cnVlO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnYXBwLm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBkYXRhLm1lc3NhZ2UrJyB3b3JsZCEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2VzLmhlbGxvICYmIG1lc3NhZ2VzLmdvb2RieWUpe1xuICAgICAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYWxsIHJlcXVpcmVkIGV2ZW50cywgdGVsbGluZyBjbGllbnRzIHRvIGtpbGwgY29ubmVjdGlvbicuZ29vZCk7XG4gICAgICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuYnJvYWRjYXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tpbGwuY29ubmVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6aXBjLmNvbmZpZy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=