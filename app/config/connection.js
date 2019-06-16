const mysql = require('mysql')

const keys = require('../../keys')


let connection = mysql.createConnection({
  host: keys.mysql.host,
  port: keys.mysql.port,
  user: keys.mysql.user,
  password: keys.mysql.password,
  database: keys.mysql.database
})

connection.connect(function (error) {
  if (error) throw error
  console.log("connected as id " + connection.threadId)
})


module.exports = connection