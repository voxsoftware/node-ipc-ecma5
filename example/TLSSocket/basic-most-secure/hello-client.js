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
ipc.config.networkHost = 'localhost';
ipc.config.tls = {
    private: __dirname + '/../../../local-node-ipc-certs/private/client.key',
    public: __dirname + '/../../../local-node-ipc-certs/client.pub',
    rejectUnauthorized: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVExTU29ja2V0L2Jhc2ljLW1vc3Qtc2VjdXJlL2hlbGxvLWNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBSSxRQUFRLG1CQUFSLENBQUo7Ozs7Ozs7OztBQVNKLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsT0FBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLElBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsV0FBWCxHQUF1QixXQUF2QjtBQUNBLElBQUksTUFBSixDQUFXLEdBQVgsR0FBZTtBQUNYLGFBQVMsWUFBVSxtREFBVjtBQUNULFlBQVEsWUFBVSwyQ0FBVjtBQUNSLHdCQUFtQixJQUFuQjtBQUNBLHdCQUFvQixDQUNoQixZQUFVLDJDQUFWLENBREo7Q0FKSjs7QUFTQSxJQUFJLFlBQUosQ0FDSSxPQURKLEVBRUksWUFBVTtBQUNOLFFBQUksRUFBSixDQUFPLEtBQVAsQ0FBYSxFQUFiLENBQ0ksU0FESixFQUVJLFlBQVU7QUFDTixZQUFJLEdBQUosQ0FBUSwyQkFBMkIsT0FBM0IsRUFBb0MsSUFBSSxNQUFKLENBQVcsS0FBWCxDQUE1QyxDQURNO0FBRU4sWUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FDSSxTQURKLEVBRUksT0FGSixFQUZNO0tBQVYsQ0FGSixDQURNO0FBV04sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxZQURKLEVBRUksWUFBVTtBQUNOLFlBQUksR0FBSixDQUFRLDBCQUEwQixNQUExQixDQUFSLENBRE07S0FBVixDQUZKLENBWE07QUFpQk4sUUFBSSxFQUFKLENBQU8sS0FBUCxDQUFhLEVBQWIsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWM7QUFDVixZQUFJLEdBQUosQ0FBUSw4QkFBOEIsS0FBOUIsRUFBcUMsSUFBN0MsRUFEVTtLQUFkLENBRkosQ0FqQk07Q0FBVixDQUZKIiwiZmlsZSI6ImhlbGxvLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcGM9cmVxdWlyZSgnLi4vLi4vLi4vbm9kZS1pcGMnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gKlxuICogWW91IHNob3VsZCBzdGFydCBib3RoIGhlbGxvIGFuZCB3b3JsZFxuICogdGhlbiB5b3Ugd2lsbCBzZWUgdGhlbSBjb21tdW5pY2F0aW5nLlxuICpcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmlwYy5jb25maWcuaWQgPSAnaGVsbG8nO1xuaXBjLmNvbmZpZy5yZXRyeT0gMTUwMDtcbmlwYy5jb25maWcubmV0d29ya0hvc3Q9J2xvY2FsaG9zdCc7XG5pcGMuY29uZmlnLnRscz17XG4gICAgcHJpdmF0ZTogX19kaXJuYW1lKycvLi4vLi4vLi4vbG9jYWwtbm9kZS1pcGMtY2VydHMvcHJpdmF0ZS9jbGllbnQua2V5JyxcbiAgICBwdWJsaWM6IF9fZGlybmFtZSsnLy4uLy4uLy4uL2xvY2FsLW5vZGUtaXBjLWNlcnRzL2NsaWVudC5wdWInLFxuICAgIHJlamVjdFVuYXV0aG9yaXplZDp0cnVlLFxuICAgIHRydXN0ZWRDb25uZWN0aW9uczogW1xuICAgICAgICBfX2Rpcm5hbWUrJy8uLi8uLi8uLi9sb2NhbC1ub2RlLWlwYy1jZXJ0cy9zZXJ2ZXIucHViJ1xuICAgIF1cbn07XG5cbmlwYy5jb25uZWN0VG9OZXQoXG4gICAgJ3dvcmxkJyxcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBpcGMub2Yud29ybGQub24oXG4gICAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJyMjIGNvbm5lY3RlZCB0byB3b3JsZCAjIycucmFpbmJvdywgaXBjLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgaXBjLm9mLndvcmxkLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlbGxvJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdkaXNjb25uZWN0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZGlzY29ubmVjdGVkIGZyb20gd29ybGQnLm5vdGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlwYy5vZi53b3JsZC5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhIG1lc3NhZ2UgZnJvbSB3b3JsZCA6ICcuZGVidWcsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG4iXX0=