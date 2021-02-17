module.exports = {
    selectSingleLocation: `SELECT * 
                         FROM LOCATION_MASTER 
                         WHERE LOCATION_CODE = $1`,
    selectSingleZone: `SELECT * 
                     FROM LOCATION_DETAIL 
                     WHERE ZONE_CODE = $1`
};