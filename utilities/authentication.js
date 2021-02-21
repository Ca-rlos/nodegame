const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const db = require('./postgres_config.js');

module.exports = {
    passportLocal: passport.use(new LocalStrategy(
        function(username, password, done) {
            db.query(authenticateUser, [username, password], (err, result) => {
                if (err) {
                return next(err);
                } else if (username == result.rows[0].name) {
                    return done(null, user)
                } else if (username != result.rows[0].name) {
                    return done(null, false)
                }
            });
        })
    ),
    passportBasic: passport.use(new BasicStrategy(
        function(username, password, done) {
            if (username != 'admin') {
                return done(null, false);
            } else if (password != 'placeholder') {
                return done(null, false);
            } else {
                return done(null, {user: 'admin'});
            };
        })
    ),
};