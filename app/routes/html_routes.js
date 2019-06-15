const express = require('express')

const burger = require('../models/burger')


const router = express.Router()


router.get('/', function(request, response) {
  burger.all()
    .then(burgers => {
      response.render('index', {burgers: burgers})
    })
    .catch(() => {
      response.status(500).end()
    })
})


module.exports = router