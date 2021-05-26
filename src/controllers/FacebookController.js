var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

function facebook() {
    passport.use(new Strategy({
            clientID: '206298000544809',
            clientSecret: '658b9dd0f511fbf5a4d274eaf7b86675',
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }));

}

module.exports = facebook