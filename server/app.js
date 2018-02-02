const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const customerModel = require('./models/Customer.js');
const restaurantModel = require('./models/Restaurant.js');
const app = express();
mongoose.connect('mongodb://' + process.env.DBUSERNAME + ':' + process.env.DBPASSWORD + '@ds123728.mlab.com:23728/noshspot', { useMongoClient: true });
mongoose.Promise = Promise;
var session = require("express-session")
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
const Customer = require('./models/Customer');

// app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });



passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
  },
  function(email, password, done) {
      console.log('attempted login');
      Customer.findOne({ email: email }, function(err, user) {
      if (err) { return res.status(200).send('Invalid username/password!'); }
      if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
      }
      console.log('success');
      return done(null, user);
  });
  }
));

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(200).send('Invalid username/password!');  }
    if (!user) { return res.status(200).send('Invalid username/password!');  }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).send(user);
    });
  })(req, res, next);
});
  


app.get('/', (req, res) => {
    res.status(200).send('Hello');
})

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


app.use('/api/customer', require('./routes/customer'));
app.use('/api/restaurant', require('./routes/restaurant'));
module.exports = app;