'use strict';

var ipc = require('../../../node-ipc');
var process = require('process');
var dieAfter = 30000;

//die after 60 seconds
setTimeout(function killServerProcess() {
    process.exit(0);
}, dieAfter);

ipc.config.id = 'unixClient';
ipc.config.retry = 600;
ipc.config.silent = true;

ipc.connectTo('testWorld', '/tmp/app.testWorld');

ipc.connectTo('testWorld2', '/tmp/app.testWorld');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL3NwZWMvc3VwcG9ydC9qYXNtaW5lVGVzdC91bml4Q2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU0sTUFBSSxRQUFRLG1CQUFSLENBQUo7QUFDTixJQUFNLFVBQVEsUUFBUSxTQUFSLENBQVI7QUFDTixJQUFNLFdBQVMsS0FBVDs7O0FBR04sV0FDSSxTQUFTLGlCQUFULEdBQTRCO0FBQ3hCLFlBQVEsSUFBUixDQUFhLENBQWIsRUFEd0I7Q0FBNUIsRUFHQSxRQUpKOztBQU9BLElBQUksTUFBSixDQUFXLEVBQVgsR0FBZ0IsWUFBaEI7QUFDQSxJQUFJLE1BQUosQ0FBVyxLQUFYLEdBQWtCLEdBQWxCO0FBQ0EsSUFBSSxNQUFKLENBQVcsTUFBWCxHQUFrQixJQUFsQjs7QUFFQSxJQUFJLFNBQUosQ0FDSSxXQURKLEVBRUksb0JBRko7O0FBS0EsSUFBSSxTQUFKLENBQ0ksWUFESixFQUVJLG9CQUZKIiwiZmlsZSI6InVuaXhDbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlwYz1yZXF1aXJlKCcuLi8uLi8uLi9ub2RlLWlwYycpO1xuY29uc3QgcHJvY2Vzcz1yZXF1aXJlKCdwcm9jZXNzJyk7XG5jb25zdCBkaWVBZnRlcj0zMDAwMDtcblxuLy9kaWUgYWZ0ZXIgNjAgc2Vjb25kc1xuc2V0VGltZW91dChcbiAgICBmdW5jdGlvbiBraWxsU2VydmVyUHJvY2Vzcygpe1xuICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfSxcbiAgICBkaWVBZnRlclxuKTtcblxuaXBjLmNvbmZpZy5pZCA9ICd1bml4Q2xpZW50JztcbmlwYy5jb25maWcucmV0cnk9IDYwMDtcbmlwYy5jb25maWcuc2lsZW50PXRydWU7XG5cbmlwYy5jb25uZWN0VG8oXG4gICAgJ3Rlc3RXb3JsZCcsXG4gICAgJy90bXAvYXBwLnRlc3RXb3JsZCdcbik7XG5cbmlwYy5jb25uZWN0VG8oXG4gICAgJ3Rlc3RXb3JsZDInLFxuICAgICcvdG1wL2FwcC50ZXN0V29ybGQnXG4pO1xuIl19