
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'bptrackapp');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var pressures = [
        { datetaken : new Date(new Date()),
          timeofday : 'Morning',
          systolic : 133,
          diastolic: 76,
          pulse : 67
        },
        { datetaken : new Date(new Date()),
          timeofday : 'Evening',
          systolic  : 119,
          diastolic : 79,
          pulse : 66
        },
      ]

app.get('/', routes.indexi(pressures));
app.get('/users', user.list);

app.post('/pressures.json', routes.addPressures(pressures));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
