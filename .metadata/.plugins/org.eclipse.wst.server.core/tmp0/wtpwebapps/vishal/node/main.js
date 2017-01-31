var http = require("http");

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hi jasmine');
}).listen(8081);

console.log('server runnin on 8081');
