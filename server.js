require("dotenv").config();
var express = require("express");
var db = require("./models");
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

// Middleware
    //For Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
  //For Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    //For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.render('index');
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var authRoute = require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, db.user);


var syncOptions = {  };


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// app.listen(PORT, function (err) {
//   if (!err)
//     console.log("\nSite is live");
//   else console.log(err)
// });

module.exports = app;
