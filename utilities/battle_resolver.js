const {playerBank, enemyBank, itemBank} = require('../data/temp_db.js');

module.exports = function(player, enemy) {
    const battleCoefficient = function(health, attack, defense, speed, luck) {
        const healthScore = health * .4;
        const attackScore = attack * .15;
        const defenseScore = defense * .15;
        const speedScore = speed * .15;
        const luckScore = ((Math.random() / 5)) * luck;
        const totalScore = healthScore + attackScore + defenseScore + speedScore + luckScore;
        return totalScore;
    }
    const playerCoefficient = battleCoefficient(playerBank[player].stats.health, playerBank[player].stats.attack, playerBank[player].stats.defense, playerBank[player].stats.speed, playerBank[player].stats.luck);
    const enemyCoefficient = battleCoefficient(enemyBank[enemy].stats.health, enemyBank[enemy].stats.attack, enemyBank[enemy].stats.defense, enemyBank[enemy].stats.speed, enemyBank[enemy].stats.luck);

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