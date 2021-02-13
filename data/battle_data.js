module.exports = {
    selectBattleParticipants: `SELECT *
                     FROM PLAYERS
                     WHERE NAME = $1
                     UNION ALL
                     SELECT * 
                     FROM ENEMIES 
                     WHERE NAME = $2`,
    updatePlayerExperience: `UPDATE PLAYERS
                    SET EXPERIENCE = EXPERIENCE + $1
                    WHERE NAME = $2`
    };