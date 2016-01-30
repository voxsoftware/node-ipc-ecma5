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

ipc.connectTo('world', function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvdW5peFdpbmRvd3NTb2NrZXQvTXVsdGktQ2xpZW50LUJyb2FkY2FzdC9nb29kYnllLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsU0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCOztBQUVBLElBQUksU0FBSixDQUNJLE9BREosRUFFSSxZQUFVO0FBQ04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDJCQUEyQixPQUEzQixFQUFvQyxJQUFJLE1BQUosQ0FBVyxLQUFYLENBQTVDLENBRE07QUFFTixZQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLGFBREosRUFFSTtBQUNJLGdCQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVixxQkFBVSxTQUFWO1NBSlIsRUFGTTtLQUFWLENBRkosQ0FETTtBQWNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksWUFESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwwQkFBMEIsTUFBMUIsQ0FBUixDQURNO0tBQVYsQ0FGSixDQWRNO0FBb0JOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksaUJBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLGtDQUFrQyxNQUFsQyxDQUFSLENBRFU7QUFFVixZQUFJLFVBQUosQ0FBZSxPQUFmLEVBRlU7S0FBZCxDQUZKLENBcEJNO0NBQVYsQ0FGSiIsImZpbGUiOiJnb29kYnllLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKiBcbiAqIFlvdSBzaG91bGQgc3RhcnQgYm90aCBoZWxsbyBhbmQgd29ybGRcbiAqIHRoZW4geW91IHdpbGwgc2VlIHRoZW0gY29tbXVuaWNhdGluZy5cbiAqIFxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICdnb29kYnllJztcbmlwYy5jb25maWcucmV0cnk9IDE1MDA7XG5cbmlwYy5jb25uZWN0VG8oXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdhcHAubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdnb29kYnllJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdkaXNjb25uZWN0ZWQgZnJvbSB3b3JsZCcubm90aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2tpbGwuY29ubmVjdGlvbicsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCd3b3JsZCByZXF1ZXN0ZWQga2lsbC5jb25uZWN0aW9uJy5ub3RpY2UpO1xuICAgICAgICAgICAgICAgIGlwYy5kaXNjb25uZWN0KCd3b3JsZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG4iXX0=