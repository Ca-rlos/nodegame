const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSinglePlayer, updateSingleItem, deleteSingleItem, updatePlayerZone, createPlayer} = require('../data/player_data.js');
const {generateAvatar} = require('../utilities/avatar_generator');

router.get('/player', function(req, res, next) {
  const playerName = req.query.name;
  db.query(selectSinglePlayer, [playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
  });
});

router.post('/player', function(req, res, next) {
  const playerName = req.query.name;
  const playerClass = req.query.class;
  const playerPassword = req.query.password;
  db.query(createPlayer, [playerName, playerClass, playerPassword], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('player created!');
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
  const itemCode = req.query.code;
  const playerName = req.query.player;
  db.query(deleteSingleItem, [itemCode, playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('item removed!');
  });
});

router.put('/player/zone', function(req, res, next) {
  const zoneCode = req.query.code;
  const playerName = req.query.player;
  db.query(updatePlayerZone, [zoneCode, playerName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('new zone: ' + zoneCode);
  });
});

router.put('/player/avatar', function(req, res, next) {
  res.send(generateAvatar());
});

module.exports = router;