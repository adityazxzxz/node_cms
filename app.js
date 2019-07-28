var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes/router');
var helmet = require('helmet');
var bodyparser = require('body-parser');
var md5 = require('md5');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

//sessioncheck
app.use((req,res,next) => {
  var date = new Date();
  var ses = `s3cr3t4app${date.getHours()+date.getMinutes()}`;
  console.log(md5(ses));
  if(req.query.session){
    if(req.query.session === md5(ses)){
      next();
    }else{
      res.json({
        error:true,
        message:'session invalid'
      })
    }
  }else{
    res.json({erro:true,message:'sesion notfound'});
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:true,message:err.message});
});


router.configure(app);

module.exports = app;
