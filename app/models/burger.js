const orm = require('../config/orm')


let burger = {

  all: function () {
    return new Promise(function (resolve, reject) {
      orm.all('burgers')
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  create: function (cols, vals) {
    return new Promise(function (resolve, reject) {
      orm.create('burgers', cols, vals)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  update: function (objColVals, condition) {
    return new Promise(function (resolve, reject) {
      orm.update('burgers', objColVals, condition)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}


module.exports = burger