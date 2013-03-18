
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')

app = express();
app.configure(function(){
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/* Add routes below */
app.get('/', function(req, res){
  res.send('hello world');
});

http.createServer(app).listen(process.env.OPENSHIFT_INTERNAL_PORT, process.env.OPENSHIFT_INTERNAL_IP, function() {
  console.log("Express server listening on port " + process.env.OPENSHIFT_INTERNAL_PORT);
});
