const express = require('express')

const burger = require('../models/burger')


const router = express.Router()


router.get('/', function (request, response) {
  burger.all()
    .then(burgers => {

      // Separate uneaten and eaten bugers into two different groupings
      let uneaten = []
      let eaten = []
      burgers.forEach(b => {
        if (b.devoured) {
          eaten.push(b)
        } else {
          uneaten.push(b)
        }
      })

      response.render('index', {
        uneaten: uneaten,
        eaten: eaten,
      })
    })
    .catch(() => {
      response.status(500).end()
    })
})


module.exports = router