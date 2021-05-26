var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

function facebook() {
    passport.use(new Strategy({
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }));

}

module.exports = facebook
