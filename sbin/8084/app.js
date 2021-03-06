var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var express_session = require('express-session');




//apps
var index = require('./routes/index');
var users = require('./routes/users');
var session = require('./routes/session');
var gcontrol = require('./routes/gcontrol');
var guser = require('./routes/guser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express_session({ secret: 'G91K5 92KF8 P30D5 BY2MA', resave: false, saveUninitialized: true, cookie: {}}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public/scss'),
  dest: path.join(__dirname, 'public/css'),
  includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src'],
  indentedSyntax: false, // true = .sass and false = .scss
  debug: true,
  prefix: '/css'
}));

// statics
app.use(express.static(path.join(__dirname, 'public')));
app.use ('/share', express.static(path.join(__dirname, '../../share')));
app.use ('/bin', express.static(path.join(__dirname, '../../bin')));
app.use ('/boot', express.static(path.join(__dirname, '../../boot')));
app.use ('/lib', express.static(path.join(__dirname, '../../lib')));

//apps
app.use('/', index);
app.use ('/session', session);
app.use ('/gcontrol', gcontrol);
app.use ('/guser', guser);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
