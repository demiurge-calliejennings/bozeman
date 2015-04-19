var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('Client'));
app.use('/lib', express.static(__dirname + '/node_modules'));

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/Client/Bozeman.html');
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});