const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Player management.

router.get('/player', require('./player'));

router.put('/player/item', require('./player'));

router.delete('/player/item', require('./player'));

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
