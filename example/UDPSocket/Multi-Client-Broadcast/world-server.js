'use strict';

var ipc = require('../../../node-ipc');

/***************************************\
 * 
 * Since there is no client relationship
 * with UDP sockets sockets are not kept 
 * open.
 * 
 * This means the order sockets are opened
 * is important.
 * 
 * Start World first. Then you can start 
 * hello or goodbye in any order you
 * choose.
 * 
 ***************************************/

ipc.config.id = 'world';
ipc.config.retry = 1500;

var messages = {
    goodbye: false,
    hello: false
};

ipc.serveNet('udp4', function () {
    console.log(123);
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message from '.debug, data.id.variable, ' : '.debug, data.message.data);
        messages[data.id] = true;
        ipc.server.emit(socket, 'message', {
            id: ipc.config.id,
            message: data.message + ' world!'
        });

        if (messages.hello && messages.goodbye) {
            ipc.log('got all required events, telling evryone how muchg I am loved!'.good);
            ipc.server.broadcast('message', {
                id: ipc.config.id,
                message: 'Everybody Loves The World! Got messages from hello and goodbye!'
            });
        }
    });

    console.log(ipc.server);
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVURQU29ja2V0L011bHRpLUNsaWVudC1Ccm9hZGNhc3Qvd29ybGQtc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFJLFFBQVEsbUJBQVIsQ0FBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkosSUFBSSxNQUFKLENBQVcsRUFBWCxHQUFnQixPQUFoQjtBQUNBLElBQUksTUFBSixDQUFXLEtBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxXQUFTO0FBQ1QsYUFBUSxLQUFSO0FBQ0EsV0FBTSxLQUFOO0NBRkE7O0FBS0osSUFBSSxRQUFKLENBQ0ksTUFESixFQUVJLFlBQVU7QUFDTixZQUFRLEdBQVIsQ0FBWSxHQUFaLEVBRE07QUFFTixRQUFJLE1BQUosQ0FBVyxFQUFYLENBQ0ksU0FESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsWUFBSSxHQUFKLENBQVEsc0JBQXNCLEtBQXRCLEVBQTZCLEtBQUssRUFBTCxDQUFRLFFBQVIsRUFBa0IsTUFBTSxLQUFOLEVBQWEsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFwRSxDQURpQjtBQUVqQixpQkFBUyxLQUFLLEVBQUwsQ0FBVCxHQUFrQixJQUFsQixDQUZpQjtBQUdqQixZQUFJLE1BQUosQ0FBVyxJQUFYLENBQ0ksTUFESixFQUVJLFNBRkosRUFHSTtBQUNJLGdCQUFVLElBQUksTUFBSixDQUFXLEVBQVg7QUFDVixxQkFBVSxLQUFLLE9BQUwsR0FBYSxTQUFiO1NBTGxCLEVBSGlCOztBQVlqQixZQUFHLFNBQVMsS0FBVCxJQUFrQixTQUFTLE9BQVQsRUFBaUI7QUFDbEMsZ0JBQUksR0FBSixDQUFRLGlFQUFpRSxJQUFqRSxDQUFSLENBRGtDO0FBRWxDLGdCQUFJLE1BQUosQ0FBVyxTQUFYLENBQ0ksU0FESixFQUVJO0FBQ0ksb0JBQVUsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNWLHlCQUFVLGlFQUFWO2FBSlIsRUFGa0M7U0FBdEM7S0FaSixDQUZKLENBRk07O0FBNkJOLFlBQVEsR0FBUixDQUFZLElBQUksTUFBSixDQUFaLENBN0JNO0NBQVYsQ0FGSjs7QUFxQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCIsImZpbGUiOiJ3b3JsZC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXBjPXJlcXVpcmUoJy4uLy4uLy4uL25vZGUtaXBjJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICogXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBjbGllbnQgcmVsYXRpb25zaGlwXG4gKiB3aXRoIFVEUCBzb2NrZXRzIHNvY2tldHMgYXJlIG5vdCBrZXB0IFxuICogb3Blbi5cbiAqIFxuICogVGhpcyBtZWFucyB0aGUgb3JkZXIgc29ja2V0cyBhcmUgb3BlbmVkXG4gKiBpcyBpbXBvcnRhbnQuXG4gKiBcbiAqIFN0YXJ0IFdvcmxkIGZpcnN0LiBUaGVuIHlvdSBjYW4gc3RhcnQgXG4gKiBoZWxsbyBvciBnb29kYnllIGluIGFueSBvcmRlciB5b3VcbiAqIGNob29zZS5cbiAqIFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICd3b3JsZCc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuXG52YXIgbWVzc2FnZXM9e1xuICAgIGdvb2RieWU6ZmFsc2UsXG4gICAgaGVsbG86ZmFsc2Vcbn07XG5cbmlwYy5zZXJ2ZU5ldChcbiAgICAndWRwNCcsXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coMTIzKTtcbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBpcGMubG9nKCdnb3QgYSBtZXNzYWdlIGZyb20gJy5kZWJ1ZywgZGF0YS5pZC52YXJpYWJsZSAsJyA6ICcuZGVidWcsIGRhdGEubWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1tkYXRhLmlkXT10cnVlO1xuICAgICAgICAgICAgICAgIGlwYy5zZXJ2ZXIuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBpcGMuY29uZmlnLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IGRhdGEubWVzc2FnZSsnIHdvcmxkISdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZXMuaGVsbG8gJiYgbWVzc2FnZXMuZ29vZGJ5ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlwYy5sb2coJ2dvdCBhbGwgcmVxdWlyZWQgZXZlbnRzLCB0ZWxsaW5nIGV2cnlvbmUgaG93IG11Y2hnIEkgYW0gbG92ZWQhJy5nb29kKTtcbiAgICAgICAgICAgICAgICAgICAgaXBjLnNlcnZlci5icm9hZGNhc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGlwYy5jb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdFdmVyeWJvZHkgTG92ZXMgVGhlIFdvcmxkISBHb3QgbWVzc2FnZXMgZnJvbSBoZWxsbyBhbmQgZ29vZGJ5ZSEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coaXBjLnNlcnZlcik7XG4gICAgfVxuKTtcblxuXG5cbmlwYy5zZXJ2ZXIuc3RhcnQoKTtcbiJdfQ==