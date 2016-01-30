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
    private: __dirname + '/../../../local-node-ipc-certs/private/client.key',
    public: __dirname + '/../../../local-node-ipc-certs/client.pub',
    rejectUnauthorized: false,
    trustedConnections: [__dirname + '/../../../local-node-ipc-certs/server.pub']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLW1vcmUtc2VjdXJlL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsR0FBWCxHQUFlO0FBQ1gsYUFBUyxZQUFVLG1EQUFWO0FBQ1QsWUFBUSxZQUFVLDJDQUFWO0FBQ1Isd0JBQW1CLEtBQW5CO0FBQ0Esd0JBQW9CLENBQ2hCLFlBQVUsMkNBQVYsQ0FESjtDQUpKOztBQVNBLElBQUksWUFBSixDQUNJLE9BREosRUFFSSxZQUFVO0FBQ04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDJCQUEyQixPQUEzQixFQUFvQyxJQUFJLE1BQUosQ0FBVyxLQUFYLENBQTVDLENBRE07QUFFTixZQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsSUFBYixDQUNJLFNBREosRUFFSSxPQUZKLEVBRk07S0FBVixDQUZKLENBRE07QUFXTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFlBREosRUFFSSxZQUFVO0FBQ04sWUFBSSxHQUFKLENBQVEsMEJBQTBCLE1BQTFCLENBQVIsQ0FETTtLQUFWLENBRkosQ0FYTTtBQWlCTixRQUFJLEVBQUosQ0FBTyxLQUFQLENBQWEsRUFBYixDQUNJLFNBREosRUFFSSxVQUFTLElBQVQsRUFBYztBQUNWLFlBQUksR0FBSixDQUFRLDhCQUE4QixLQUE5QixFQUFxQyxJQUE3QyxFQURVO0tBQWQsQ0FGSixDQWpCTTtDQUFWLENBRkoiLCJmaWxlIjoiaGVsbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICdoZWxsbyc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuaXBjLmNvbmZpZy50bHM9e1xuICAgIHByaXZhdGU6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3ByaXZhdGUvY2xpZW50LmtleScsXG4gICAgcHVibGljOiBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9jbGllbnQucHViJyxcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6ZmFsc2UsXG4gICAgdHJ1c3RlZENvbm5lY3Rpb25zOiBbXG4gICAgICAgIF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL3NlcnZlci5wdWInXG4gICAgXVxufTtcblxuaXBjLmNvbm5lY3RUb05ldChcbiAgICAnd29ybGQnLFxuICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnIyMgY29ubmVjdGVkIHRvIHdvcmxkICMjJy5yYWluYm93LCBpcGMuY29uZmlnLmRlbGF5KTtcbiAgICAgICAgICAgICAgICBpcGMub2Yud29ybGQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAnaGVsbG8nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdkaXNjb25uZWN0ZWQgZnJvbSB3b3JsZCcubm90aWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaXBjLm9mLndvcmxkLm9uKFxuICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSBmcm9tIHdvcmxkIDogJy5kZWJ1ZywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTtcbiJdfQ==