const express = require('express')
const app = express()
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy

passport.use(new Strategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }))
app.get('/auth/facebook', passport.authenticate('facebook'))

module.exports = app