const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Player management.

router.get('/player', passport.authenticate('local', {passReqToCallback: true, session: false, failureRedirect: '/'}), require('./player'));

router.put('/player/item', require('./player'));

router.delete('/player/item', require('./player'));

router.put('/player/zone', require('./player'));

// Enemy management.

router.get('/enemy', require('./enemy'));

// Item management.

router.get('/item', require('./items'));

router.get('/item/all', require('./items'));

// Battle management.

router.get('/battle', require('./battle'));

// Location management.

router.get('/location', require('./location'));

router.get('/location/zone', require('./location'));

module.exports = router;
