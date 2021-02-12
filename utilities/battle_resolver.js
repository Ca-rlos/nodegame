const {playerBank, enemyBank, itemBank} = require('../data/temp_db.js');

module.exports = async function(player, enemy) {
    let playerCoefficient;
    let enemyCoefficient;
    const battleCoefficient = function(target, health, attack, defense, speed) {
        const healthScore = health * .4;
        const attackScore = attack * .15;
        const defenseScore = defense * .15;
        const speedScore = speed * .15;
        const totalScore = healthScore + attackScore + defenseScore + speedScore;
        if (target == 'player') {
            playerCoefficient = totalScore;
        } else if (target == 'enemy') {
            enemyCoefficient = totalScore;
        }
    }
    const battleResolve = function () {
        if (playerCoefficient > enemyCoefficient) {
            let battleResult = 'player victory';
            return battleResult;
        } else if (playerCoefficient < enemyCoefficient) {
            let battleResult = 'enemy victory';
            return battleResult;
        } else if (playerCoefficient == enemyCoefficient) {
            let battleResult = 'draw';
            return battleResult;
        };
    };

    await db.query(selectSinglePlayer, [player], (err, result) => {
          if (err) {
            return next(err);
          }
          return result.rows;
          battleCoefficient('player', result.rows.health, result.rows.attack, result.rows.defense, result.rows.speed)
        });
    await db.query(selectSingleEnemy, [enemy], (err, result) => {
          if (err) {
            return next(err);
          }
          return result.rows;
          battleCoefficient('enemy', result.rows.health, result.rows.attack, result.rows.defense, result.rows.speed)
        });
    await battleResolve();
};