const db = require('./postgres_config.js');
const {selectBattleParticipants, updatePlayerExperience} = require('../data/battle_data.js');
const {selectSingleItem} = require('../data/item_data.js');


module.exports = function(player, enemy, res) {
    let playerCoefficient;
    let enemyCoefficient;
    let battleResult;
    const battleCoefficient = function(target, health, attack, defense, speed) {
        let healthScore = health * .4;
        let attackScore = attack * .15;
        let defenseScore = defense * .15;
        let speedScore = speed * .15;
        const totalScore = healthScore + attackScore + defenseScore + speedScore;
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
            if (element.item !== null) {
                db.query(selectSingleItem, [element.item], (err, result) => {
                    if (err) {
                        return err;
                    }
                    switch(result.rows[0].stat) {
                        case 'health':
                            element.health = element.health + result.rows[0].bonus;
                            break;
                        case 'attack':
                            element.attack = element.attack + result.rows[0].bonus;
                            break;
                        case 'defense':
                            element.defense = element.defense + result.rows[0].bonus;
                            break;
                        case 'speed':
                            element.speed = element.speed + result.rows[0].bonus;
                            break;
                        default:
                            console.log('no bonus applied!');
                    }
                });
            };
            battleCoefficient(element.name, element.health, element.attack, element.defense, element.speed);
        });
        await battleResolve(result.rows[1].experience);
    });
};