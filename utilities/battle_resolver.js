const db = require('./postgres_config.js');
const {selectBattleParticipants, updatePlayerExperience} = require('../data/battle_data.js');

module.exports = function(player, enemy, res) {
    let playerCoefficient;
    let enemyCoefficient;
    let battleResult;
    const battleCoefficient = function(target, health, attack, defense, speed) {
        const healthScore = health * .4;
        const attackScore = attack * .15;
        const defenseScore = defense * .15;
        const speedScore = speed * .15;
        const totalScore = healthScore + attackScore + defenseScore + speedScore;
        if (target == player) {
            playerCoefficient = totalScore;
        } else if (target == enemy) {
            enemyCoefficient = totalScore;
        }
    };
    const battleResolve = function (expGranted) {
        if (playerCoefficient > enemyCoefficient) {
            let battleResult = 'player victory';
            db.query(updatePlayerExperience, [player, expGranted], async (err, result) => {
                if (err) {
                    return err;
                }
            });
            res.send(battleResult);
        } else if (playerCoefficient < enemyCoefficient) {
            let battleResult = 'enemy victory';
            res.send(battleResult);
        } else if (playerCoefficient == enemyCoefficient) {
            let battleResult = 'draw';
            res.send(battleResult);
        };
    };
    db.query(selectBattleParticipants, [player, enemy], async (err, result) => {
        if (err) {
            return err;
        }
        await result.rows.forEach(element => {
            battleCoefficient(element.name, element.health, element.attack, element.defense, element.speed);
        });
        await battleResolve(result.rows[1].experience);
    });
};