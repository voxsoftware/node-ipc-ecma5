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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3QvZ29vZGJ5ZS1jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLFNBQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLFVBQVgsR0FBdUIsRUFBdkI7O0FBRUEsSUFBSSxZQUFKLENBQ0ksT0FESixFQUVJLFlBQVU7QUFDTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMkJBQTJCLE9BQTNCLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBNUMsQ0FETTtBQUVOLFlBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQ0ksYUFESixFQUVJO0FBQ0ksZ0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHFCQUFVLFNBQVY7U0FKUixFQUZNO0tBQVYsQ0FGSixDQURNO0FBY04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxZQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDBCQUEwQixNQUExQixDQUFSLENBRE07S0FBVixDQUZKLENBZE07QUFvQk4sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxpQkFESixFQUVJLFVBQVMsSUFBVCxFQUFjO0FBQ1YsWUFBSSxHQUFKLENBQVEsa0NBQWtDLE1BQWxDLENBQVIsQ0FEVTtBQUVWLFlBQUksVUFBSixDQUFlLE9BQWYsRUFGVTtLQUFkLENBRkosQ0FwQk07Q0FBVixDQUZKIiwiZmlsZSI6Imdvb2RieWUtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICdnb29kYnllJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5pcGMuY29uZmlnLm1heFJldHJpZXM9IDEwO1xuXG5pcGMuY29ubmVjdFRvTmV0KFxuICAgICd3b3JsZCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCcjIyBjb25uZWN0ZWQgdG8gd29ybGQgIyMnLnJhaW5ib3csIGlwYy5jb25maWcuZGVsYXkpO1xuICAgICAgICAgICAgICAgIGlwYy5vZi53b3JsZC5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAnYXBwLm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogaXBjLmNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnZ29vZGJ5ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdraWxsLmNvbm5lY3Rpb24nLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnd29ybGQgcmVxdWVzdGVkIGtpbGwuY29ubmVjdGlvbicubm90aWNlKTtcbiAgICAgICAgICAgICAgICBpcGMuZGlzY29ubmVjdCgnd29ybGQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuIl19