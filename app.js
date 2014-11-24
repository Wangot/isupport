var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.site = {
    'imento': 'http://www.imento.no/',
    // 'staticUrl': 'http://imento.ubook.no'
    'staticUrl': 'http://localhost:3000'

};

app.set("views", __dirname + '/views');

app.use(function(req, res, next) {
    res.renderLayout = function(viewPage, options, layout){
        if(!layout) layout = 'main';
        var ejs = require('ejs');
        var fs = require('fs');
        options.site = app.locals.site;
        var content = ejs.compile(
                fs.readFileSync(__dirname + '/views/'+ viewPage +'.ejs', 'utf8')
            )(options);

        // this.send(content);
        options.content = content;
        this.render('layouts/'+ layout, options);
    }
    next();
});

require('./routes/index')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
