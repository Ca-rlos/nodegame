const {Pool} = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: localhost,
  database: 'gameworld',
  port: 5432,
  password: process.env.PG_PASSWORD
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, (err, res) => {
      callback(err, res);
    });
  },
};
