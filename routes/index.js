const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/player', require('./player'));

router.get('/enemy', require('./enemy'));

router.get('/item', require('./items'));

router.get('/item/all', require('./items'));

router.get('/battle', require('./battle'));

module.exports = router;
