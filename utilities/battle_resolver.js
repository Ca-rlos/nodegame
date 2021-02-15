const db = require('./postgres_config.js');
const {selectBattleParticipants, updatePlayerExperience} = require('../data/battle_data.js');
const {selectSingleItem} = require('../data/item_data.js');


module.exports = function(player, enemy, res) {
    let playerCoefficient;
    let enemyCoefficient;
    let battleResult;
    const battleCoefficient = function(target, health, attack, defense, speed, item) {
        let healthScore = health * .4;
        let attackScore = attack * .15;
        let defenseScore = defense * .15;
        let speedScore = speed * .15;
        const totalScore = healthScore + attackScore + defenseScore + speedScore;
        if (item !== null) {
            db.query(selectSingleItem, [item], (err, result) => {
                if (err) {
                    return err;
                }
                switch(result.rows.stat) {
                    case 'health':
                        healthScore = healthScore + result.rows.bonus;
                        break;
                    case 'attack':
                        attackScore = attackScore + result.rows.bonus;
                        break;
                    case 'defense':
                        defenseScore = defenseScore + result.rows.bonus;
                        break;
                    case 'speed':
                        speedScore = speedScore + result.rows.bonus;
                        break;
                    default:
                        console.log('no bonus applied!');
                }
            });
        };
        if (target == player) {
            playerCoefficient = totalScore;
        } else if (target == enemy) {
            enemyCoefficient = totalScore;
        };
    };
    const battleResolve = function (expGranted) {
        if (playerCoefficient > enemyCoefficient) {
            let battleResult = 'player victory';
            db.query(updatePlayerExperience, [expGranted, player], async (err, result) => {
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
            battleCoefficient(element.name, element.health, element.attack, element.defense, element.speed, element.item);
        });
        await battleResolve(result.rows[1].experience);
    });
};