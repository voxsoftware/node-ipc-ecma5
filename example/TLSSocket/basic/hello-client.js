'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'hello';
ipc.config.retry = 1500;
ipc.config.tls = {
    rejectUnauthorized: false
};

ipc.connectToNet('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('message', 'hello');
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('message', function (data) {
        ipc.log('got a message from world : '.debug, data);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsR0FBWCxHQUFlO0FBQ1gsd0JBQW1CLEtBQW5CO0NBREo7O0FBSUEsSUFBSSxZQUFKLENBQ0ksT0FESixFQUVJLFlBQVU7QUFDTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMkJBQTJCLE9BQTNCLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBNUMsQ0FETTtBQUVOLFlBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQ0ksU0FESixFQUVJLE9BRkosRUFGTTtLQUFWLENBRkosQ0FETTtBQVdOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksWUFESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwwQkFBMEIsTUFBMUIsQ0FBUixDQURNO0tBQVYsQ0FGSixDQVhNO0FBaUJOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsOEJBQThCLEtBQTlCLEVBQXFDLElBQTdDLEVBRFU7S0FBZCxDQUZKLENBakJNO0NBQVYsQ0FGSiIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnRscz17XG4gICAgcmVqZWN0VW5hdXRob3JpemVkOmZhbHNlXG59O1xuXG5pcGMuY29ubmVjdFRvTmV0KFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuICAgICAgICAgICAgICAgIGlwYy5vZi53b3JsZC5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICdoZWxsbydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnZGlzY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2Rpc2Nvbm5lY3RlZCBmcm9tIHdvcmxkJy5ub3RpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gd29ybGQgOiAnLmRlYnVnLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuIl19