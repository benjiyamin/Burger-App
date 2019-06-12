const connection = require('./connection')


let orm = {
  selectAll: function (tableName) {
    let queryString = 'SELECT * FROM ??'
    let params = [tableName]
    connection.query(queryString, params, function (error, result) {
      if (error) throw error
      return result
    })
  },
  insertOne: function () {

  },
  updateOne: function () {

  }
}


module.exports = orm