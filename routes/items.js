const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSingleItem, selectAllItems} = require('../data/item_data.js');

router.get('/item', function(req, res, next) {
  const itemCode = req.query.code;
  db.query(selectSingleItem, [itemCode], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
  });
});

router.get('/item/all', function(req, res, next) {
    db.query(selectAllItems, (err, result) => {
      if (err) {
        return next(err);
      }
      res.send(result.rows);
    });
  });

module.exports = router;