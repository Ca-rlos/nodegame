const express = require('express');
const router = express.Router();
const {playerBank} = require('../data/temp_db');

router.get('/player', function(req, res) {
  player = req.query.name;
  res.send(playerBank[player]);
});

module.exports = router;