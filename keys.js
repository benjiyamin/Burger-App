require('dotenv').config()

exports.mysql = {
  jawsdb_url: process.env.JAWSDB_URL,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}
