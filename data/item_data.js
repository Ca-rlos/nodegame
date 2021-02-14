module.exports = {
    selectSingleItem: `SELECT * FROM ITEMS
                     WHERE CODE = $1`,
    selectAllItems: `SELECT * FROM ITEMS`
    };