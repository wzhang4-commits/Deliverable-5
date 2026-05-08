const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST || "db",
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || "projectdb",
  user: process.env.PGUSER || "student1",
  password: process.env.PGPASSWORD || "student123"
});

module.exports = pool;