const express = require('express');
const router = express.Router();
const db = require('../utilities/postgres_config.js');
const {selectSingleLocation, selectSingleZone} = require('../data/location_data.js');

router.get('/location', function(req, res, next) {
    const locationCode = req.query.location;
    db.query(selectSingleLocation, [locationCode], (err, result) => {
        if (err) {
          return next(err);
        }
        res.send(result.rows);
      });
});

router.get('/location/zone', function(req, res, next) {
    const zoneCode = req.query.zone;
    db.query(selectSingleLocation, [zoneCode], (err, result) => {
        if (err) {
          return next(err);
        }
        res.send(result.rows);
      });
});

module.exports = router;