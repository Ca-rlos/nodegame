const express = require('express');
const router = express.Router();
const battleResolver = require('../utilities/battle_resolver.js')

router.get('/battle', function(req, res) {
    const enemy = req.query.enemy;
    const player = req.query.player;
    const battleResult = battleResolver(player, enemy);
    res.send(battleResult);
});

module.exports = router;