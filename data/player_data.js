module.exports = {
    selectSinglePlayer: `SELECT *
                     FROM PLAYERS
                     WHERE NAME = $1`,
    updateSingleItem: `UPDATE PLAYERS 
                     SET ITEM = $1,
                     SET HEALTH = HEALTH + (
                        SELECT HEALTH
                        FROM ITEMS 
                        WHERE CODE = $1
                     )
                     SET ATTACK = ATTACK + (
                        SELECT ATTACK
                        FROM ITEMS 
                        WHERE CODE = $1
                     )
                     SET DEFENSE = DEFENSE + (
                        SELECT DEFENSE
                        FROM ITEMS 
                        WHERE CODE = $1
                     )
                     SET SPEED = SPEED + (
                        SELECT SPEED
                        FROM ITEMS 
                        WHERE CODE = $1
                     )
                     WHERE NAME = $2`,
    deleteSingleItem: `UPDATE PLAYERS
                     SET ITEM = NULL
                     WHERE NAME = $1`
    };