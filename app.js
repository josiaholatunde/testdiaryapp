const express = require('express');
let swig = require('swig');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');


const app = express();

swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'vhghvjhgcvhfgcfgb909u9o',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  }));

app.use(passport.initialize());
app.use(passport.session());

  

require('./server/routes')(app);
app.get('/', (req, res) => {
        res.render('index',{title: "Express"});
});



module.exports = app;