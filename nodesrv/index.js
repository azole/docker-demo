var redis = require('redis');
var client = redis.createClient(6379, 'redis'); //creates a new client 
var http = require('http');

client.on("error", function (err) {
  console.log("Error " + err);
});

var server = http.createServer(function(request, response) {
  client.incr("count");
  client.get("count", function(err, value){
    response.end(value);
  });  
});


server.listen(80, function(){
  console.log('http://0.0.0.0:80/');
});
