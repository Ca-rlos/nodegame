const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSinglePlayer, updateSingleItem, deleteSingleItem} = require('../data/player_data.js');

router.get('/player', function(req, res, next) {
  const playerName = req.query.name;
  db.query(selectSinglePlayer, [playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
  });
});

router.put('/player/item', function(req, res, next) {
  const itemCode = req.query.code;
  const playerName = req.query.player;
  db.query(updateSingleItem, [itemCode, playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('item added: ' + itemCode);
  });
});

router.delete('/player/item', function(req, res, next) {
  const playerName = req.query.player;
  db.query(deleteSingleItem, [playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('item removed!');
  });
});

module.exports = router;