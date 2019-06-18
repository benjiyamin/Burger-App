const mysql = require('mysql')

const keys = require('../../keys')


let opts
if (keys.mysql.jawsdb_url) {
  opts = keys.mysql.jawsdb_url
} else {
  opts = {
    host: keys.mysql.host,
    port: keys.mysql.port,
    user: keys.mysql.user,
    password: keys.mysql.password,
    database: keys.mysql.database
  }
}

let connection = mysql.createConnection(opts)

connection.connect(function (error) {
  if (error) throw error
  console.log("connected as id " + connection.threadId)
})


module.exports = connection