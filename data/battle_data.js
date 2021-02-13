module.exports = {
    selectBattleParticipants: `SELECT *
                     FROM PLAYERS
                     WHERE NAME = $1
                     UNION ALL
                     SELECT * 
                     FROM ENEMIES 
                     WHERE NAME = $2`,
    updatePlayerExperience: `UPDATE PLAYERS P
                    SET EXPERIENCE = EXPERIENCE + $1, 
                        LEVEL = CASE WHEN EXPERIENCE > (
                        SELECT L.EXPERIENCE
                        FROM LEVELS L 
                        WHERE L.LEVEL = P.LEVEL
                    ) THEN LEVEL + 1 ELSE LEVEL END
                    WHERE NAME = $2`
    };