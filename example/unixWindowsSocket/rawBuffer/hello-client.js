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
ipc.config.rawBuffer = true;
ipc.config.encoding = 'ascii';

ipc.connectTo('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('hello');
    });

    ipc.of.world.on('data', function (data) {
        ipc.log('got a message from world : '.debug, data, data.toString());
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvcmF3QnVmZmVyL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsU0FBWCxHQUFxQixJQUFyQjtBQUNBLElBQUksTUFBSixDQUFXLFFBQVgsR0FBb0IsT0FBcEI7O0FBRUEsSUFBSSxTQUFKLENBQ0ksT0FESixFQUVJLFlBQVU7QUFDTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMkJBQTJCLE9BQTNCLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBNUMsQ0FETTtBQUVOLFlBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQ0ksT0FESixFQUZNO0tBQVYsQ0FGSixDQURNOztBQVdOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksTUFESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsOEJBQThCLEtBQTlCLEVBQXFDLElBQTdDLEVBQWtELEtBQUssUUFBTCxFQUFsRCxFQURVO0tBQWQsQ0FGSixDQVhNO0NBQVYsQ0FGSiIsImZpbGUiOiJoZWxsby1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2hlbGxvJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLnJhd0J1ZmZlcj10cnVlO1xuaXBjLmNvbmZpZy5lbmNvZGluZz0nYXNjaWknO1xuXG5pcGMuY29ubmVjdFRvKFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuICAgICAgICAgICAgICAgIGlwYy5vZi53b3JsZC5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAnaGVsbG8nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnZGF0YScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gd29ybGQgOiAnLmRlYnVnLCBkYXRhLGRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcbiJdfQ==