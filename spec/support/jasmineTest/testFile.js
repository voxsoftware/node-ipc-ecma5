'use strict';

var cmd = require('node-cmd');

cmd.run('node ' + __dirname + '/unixServer.js');
cmd.run('node ' + __dirname + '/unixServerSync.js');

cmd.run('node ' + __dirname + '/udp4Server.js');
cmd.run('node ' + __dirname + '/udp6Server.js');

cmd.run('node ' + __dirname + '/tcpServer.js');
cmd.run('node ' + __dirname + '/tcpServerSync.js');

cmd.run('node ' + __dirname + '/unixClient.js');
cmd.run('node ' + __dirname + '/unixClient.js');

cmd.run('node ' + __dirname + '/tcpClient.js');
cmd.run('node ' + __dirname + '/tcpClient.js');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL3NwZWMvc3VwcG9ydC9qYXNtaW5lVGVzdC90ZXN0RmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNLE1BQUksUUFBUSxVQUFSLENBQUo7O0FBRU4sSUFBSSxHQUFKLFdBQWdCLDRCQUFoQjtBQUNBLElBQUksR0FBSixXQUFnQixnQ0FBaEI7O0FBRUEsSUFBSSxHQUFKLFdBQWdCLDRCQUFoQjtBQUNBLElBQUksR0FBSixXQUFnQiw0QkFBaEI7O0FBRUEsSUFBSSxHQUFKLFdBQWdCLDJCQUFoQjtBQUNBLElBQUksR0FBSixXQUFnQiwrQkFBaEI7O0FBRUEsSUFBSSxHQUFKLFdBQWdCLDRCQUFoQjtBQUNBLElBQUksR0FBSixXQUFnQiw0QkFBaEI7O0FBRUEsSUFBSSxHQUFKLFdBQWdCLDJCQUFoQjtBQUNBLElBQUksR0FBSixXQUFnQiwyQkFBaEIiLCJmaWxlIjoidGVzdEZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNtZD1yZXF1aXJlKCdub2RlLWNtZCcpO1xuXG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91bml4U2VydmVyLmpzYCk7XG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91bml4U2VydmVyU3luYy5qc2ApO1xuXG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91ZHA0U2VydmVyLmpzYCk7XG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91ZHA2U2VydmVyLmpzYCk7XG5cbmNtZC5ydW4oYG5vZGUgJHtfX2Rpcm5hbWV9L3RjcFNlcnZlci5qc2ApO1xuY21kLnJ1bihgbm9kZSAke19fZGlybmFtZX0vdGNwU2VydmVyU3luYy5qc2ApO1xuXG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91bml4Q2xpZW50LmpzYCk7XG5jbWQucnVuKGBub2RlICR7X19kaXJuYW1lfS91bml4Q2xpZW50LmpzYCk7XG5cbmNtZC5ydW4oYG5vZGUgJHtfX2Rpcm5hbWV9L3RjcENsaWVudC5qc2ApO1xuY21kLnJ1bihgbm9kZSAke19fZGlybmFtZX0vdGNwQ2xpZW50LmpzYCk7XG4iXX0=