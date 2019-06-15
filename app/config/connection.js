const mysql = require('mysql')

const keys = require('../../keys')


let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: keys.mysql.username,
  password: keys.mysql.password,
  database: 'burgers_db'
})

connection.connect(function (error) {
  if (error) throw error
  console.log("connected as id " + connection.threadId)
})


module.exports = connection