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
ipc.config.sync = true;

ipc.serveNet(function () {
    ipc.server.on('message', function (data, socket) {
        ipc.log('got a message : '.debug, data);
        //fake some synch procedural code
        setTimeout(function () {
            ipc.server.emit(socket, 'message', data + ' world!');
        }, 3000);
    });

    ipc.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
});

ipc.server.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL2V4YW1wbGUvVENQU29ja2V0L2Jhc2ljU3luYy93b3JsZC1zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQUksUUFBUSxtQkFBUixDQUFKOzs7Ozs7Ozs7QUFTSixJQUFJLE1BQUosQ0FBVyxFQUFYLEdBQWdCLE9BQWhCO0FBQ0EsSUFBSSxNQUFKLENBQVcsS0FBWCxHQUFrQixJQUFsQjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgsR0FBa0IsSUFBbEI7O0FBRUEsSUFBSSxRQUFKLENBQ0ksWUFBVTtBQUNOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxTQURKLEVBRUksVUFBUyxJQUFULEVBQWMsTUFBZCxFQUFxQjtBQUNqQixZQUFJLEdBQUosQ0FBUSxtQkFBbUIsS0FBbkIsRUFBMEIsSUFBbEM7O0FBRGlCLGtCQUdqQixDQUNJLFlBQVU7QUFDTixnQkFBSSxNQUFKLENBQVcsSUFBWCxDQUNJLE1BREosRUFFSSxTQUZKLEVBR0ksT0FBSyxTQUFMLENBSEosQ0FETTtTQUFWLEVBT0EsSUFSSixFQUhpQjtLQUFyQixDQUZKLENBRE07O0FBbUJOLFFBQUksTUFBSixDQUFXLEVBQVgsQ0FDSSxxQkFESixFQUVJLFVBQVMsSUFBVCxFQUFjLE1BQWQsRUFBcUI7QUFDakIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFEaUI7S0FBckIsQ0FGSixDQW5CTTtDQUFWLENBREo7O0FBK0JBLElBQUksTUFBSixDQUFXLEtBQVgiLCJmaWxlIjoid29ybGQtc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAqXG4gKiBZb3Ugc2hvdWxkIHN0YXJ0IGJvdGggaGVsbG8gYW5kIHdvcmxkXG4gKiB0aGVuIHlvdSB3aWxsIHNlZSB0aGVtIGNvbW11bmljYXRpbmcuXG4gKlxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaXBjLmNvbmZpZy5pZCA9ICd3b3JsZCc7XG5pcGMuY29uZmlnLnJldHJ5PSAxNTAwO1xuaXBjLmNvbmZpZy5zeW5jID0gdHJ1ZTtcblxuaXBjLnNlcnZlTmV0KFxuICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlwYy5zZXJ2ZXIub24oXG4gICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhLHNvY2tldCl7XG4gICAgICAgICAgICAgICAgaXBjLmxvZygnZ290IGEgbWVzc2FnZSA6ICcuZGVidWcsIGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vZmFrZSBzb21lIHN5bmNoIHByb2NlZHVyYWwgY29kZVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcGMuc2VydmVyLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhKycgd29ybGQhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMzAwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaXBjLnNlcnZlci5vbihcbiAgICAgICAgICAgICdzb2NrZXQuZGlzY29ubmVjdGVkJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsc29ja2V0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbik7XG5cblxuXG5pcGMuc2VydmVyLnN0YXJ0KCk7XG4iXX0=