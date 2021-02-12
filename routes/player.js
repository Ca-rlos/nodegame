const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSinglePlayer} = require('../data/player_data.js');

router.get('/player', function(req, res, next) {
  const playerName = req.query.name;
  db.query(selectSinglePlayer, [playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
  });
});

module.exports = router;