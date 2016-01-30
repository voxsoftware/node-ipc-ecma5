'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'goodbye';
ipc.config.retry = 1500;
ipc.config.maxRetries = 10;
ipc.config.tls = {
    rejectUnauthorized: false
};

ipc.connectToNet('world', function () {
    ipc.of.world.on('connect', function () {
        ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
        ipc.of.world.emit('app.message', {
            id: ipc.config.id,
            message: 'goodbye'
        });
    });
    ipc.of.world.on('disconnect', function () {
        ipc.log('disconnected from world'.notice);
    });
    ipc.of.world.on('kill.connection', function (data) {
        ipc.log('world requested kill.connection'.notice);
        ipc.disconnect('world');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3QtYmFzaWMvZ29vZGJ5ZS1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLFNBQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFVBQVgsR0FBdUIsRUFBdkI7QUFDQSxJQUFJLE1BQUosQ0FBVyxHQUFYLEdBQWU7QUFDWCx3QkFBbUIsS0FBbkI7Q0FESjs7QUFJQSxJQUFJLFlBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1QyxDQURNO0FBRU4sWUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FDSSxhQURKLEVBRUk7QUFDSSxnQkFBVSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ1YscUJBQVUsU0FBVjtTQUpSLEVBRk07S0FBVixDQUZKLENBRE07QUFjTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFlBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMEJBQTBCLE1BQTFCLENBQVIsQ0FETTtLQUFWLENBRkosQ0FkTTtBQW9CTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLGlCQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSxrQ0FBa0MsTUFBbEMsQ0FBUixDQURVO0FBRVYsWUFBSSxVQUFKLENBQWUsT0FBZixFQUZVO0tBQWQsQ0FGSixDQXBCTTtDQUFWLENBRkoiLCJmaWxlIjoiZ29vZGJ5ZS1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICpcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pcGMuY29uZmlnLmlkID0gJ2dvb2RieWUnO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcubWF4UmV0cmllcz0gMTA7XG5pcGMuY29uZmlnLnRscz17XG4gICAgcmVqZWN0VW5hdXRob3JpemVkOmZhbHNlXG59O1xuXG5pcGMuY29ubmVjdFRvTmV0KFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuICAgICAgICAgICAgICAgIGlwYy5vZi53b3JsZC5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAnYXBwLm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnZ29vZGJ5ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdraWxsLmNvbm5lY3Rpb24nLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnd29ybGQgcmVxdWVzdGVkIGtpbGwuY29ubmVjdGlvbicubm90aWNlKTtcbiAgICAgICAgICAgICAgICBpcGMuZGlzY29ubmVjdCgnd29ybGQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuIl19