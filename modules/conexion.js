const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "***********",
  database: "joyas",
  allowExitOnIdle: true,
});

module.exports = pool;
