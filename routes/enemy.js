const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSingleEnemy} = require('../data/enemy_data.js');

router.get('/player', function(req, res, next) {
  const enemyName = req.query.name;
  db.query(selectSingleEnemy, [enemyName], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
  });
});

module.exports = router;