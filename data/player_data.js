module.exports = {
    selectSinglePlayer: `SELECT *
                     FROM PLAYERS
                     WHERE NAME = $1`,
    updateSingleItem: `UPDATE PLAYERS 
                     SET ITEM = $1,
                     HEALTH = HEALTH + (
                        SELECT HEALTH
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     ATTACK = ATTACK + (
                        SELECT ATTACK
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     DEFENSE = DEFENSE + (
                        SELECT DEFENSE
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     SPEED = SPEED + (
                        SELECT SPEED
                        FROM ITEMS 
                        WHERE CODE = $1
                     ) 
                     WHERE NAME = $2`,
    deleteSingleItem: `UPDATE PLAYERS
                     SET ITEM = NULL, 
                     HEALTH = HEALTH - (
                        SELECT HEALTH
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     ATTACK = ATTACK - (
                        SELECT ATTACK
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     DEFENSE = DEFENSE - (
                        SELECT DEFENSE
                        FROM ITEMS 
                        WHERE CODE = $1
                     ), 
                     SPEED = SPEED - (
                        SELECT SPEED
                        FROM ITEMS 
                        WHERE CODE = $1
                     ) 
                     WHERE NAME = $2`,
    updatePlayerZone: `UPDATE PLAYERS 
                      SET ZONE_CODE = $1
                      WHERE NAME = $2`,
    authenticateUser: `SELECT NAME 
                        FROM PLAYERS
                        WHERE NAME = $1
                        AND PASSWORD = $2`,
    createPlayer: `INSERT INTO PLAYERS
                    (NAME, CLASS, PASSWORD)
                    VALUES ($1, $2, $3)`
    };