const db = require('./postgres_config.js');
const {selectBattleParticipants} = require('../data/battle_data.js');

module.exports = function(player, enemy) {
    let playerCoefficient;
    let enemyCoefficient;
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
    db.query(selectBattleParticipants, [player, enemy], (err, result) => {
            if (err) {
                return err;
            }
            result.rows.forEach(element => {
                battleCoefficient(element.name, element.health, element.attack, element.defense, element.speed);
            });
            battleResolve();
        });
};