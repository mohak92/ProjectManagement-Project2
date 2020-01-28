var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/homepage', isLoggedIn, authController.homepage);
    app.get('/logout', authController.logout);
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/homepage',

 
        failureRedirect: '/signup'
    }
));

function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signup');
 
}
};
