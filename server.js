var express = require('express');
var app = express();
var http = require('http').Server(app);
var base = __dirname + '/'

// app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res){
	app.use("/public", express.static(__dirname + '/public/'));
	res.render('index');
	
});


var port = process.env.PORT || 5000;
   

http.listen(port);

  
