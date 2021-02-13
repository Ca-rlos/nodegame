module.exports = {
    selectBattleParticipants: `SELECT *
                     FROM PLAYERS
                     WHERE NAME = $1
                     UNION ALL
                     SELECT * 
                     FROM ENEMIES 
                     WHERE NAME = $2`
    };