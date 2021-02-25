const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Player management.

router.get('/player', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

router.post('/player', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

router.put('/player/item', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

router.delete('/player/item', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

router.put('/player/zone', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

// Provisional

router.put('/player/avatar', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

// Enemy management.

router.get('/enemy', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./enemy'));

// Item management.

router.get('/item', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./items'));

router.get('/item/all', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./items'));

// Battle management.

router.get('/battle', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./battle'));

// Location management.

router.get('/location', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./location'));

router.get('/location/zone', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./location'));

module.exports = router;
