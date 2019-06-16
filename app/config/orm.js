const connection = require('./connection')


function questionMarks(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push('?')
  }
  return arr.toString()
}


function objToSql(obj) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in obj) {
    let value = obj[key]
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`)
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString()
}


let orm = {

  all: function (table) {
    return new Promise(function (resolve, reject) {
      let queryString = 'SELECT * FROM ??'
      let params = [table]
      connection.query(queryString, params, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  },

  create: function (table, cols, vals) {
    return new Promise(function (resolve, reject) {
      let queryString = `INSERT INTO ${table} (${cols.toString()}) `
      queryString += `VALUES (${questionMarks(vals.length)})`
      connection.query(queryString, vals, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  },

  update: function (table, objColVals, condition) {
    return new Promise(function (resolve, reject) {
      let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} `
      queryString += `WHERE ${condition}`
      connection.query(queryString, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  },

  delete: function (table, condition) {
    return new Promise(function (resolve, reject) {
      let queryString = `DELETE FROM ${table} WHERE ${condition}`
      connection.query(queryString, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }
}


module.exports = orm