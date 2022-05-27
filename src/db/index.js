const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "repaso",
  port: 5432,
};

const pool = new Pool(config);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
