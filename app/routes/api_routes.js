const express = require('express')

const burger = require('../models/burger')


const router = express.Router()


router.get('/api/burgers', function (request, response) {
  burger.all()
    .then(data => {
      response.json(data)
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.post('/api/burgers', function (request, response) {
  let cols = ['name']
  let vals = [request.body.name]
  burger.create(cols, vals)
    .then((data) => {
      response.json(data)
      //response.status(204).end()
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.put('/api/burgers/:id', function (request, response) {
  let objColVals = request.body
  let condition = `id = ${request.params.id}`
  burger.update(objColVals, condition)
    .then((data) => {
      response.json(data)
      //response.status(204).end()
    })
    .catch(() => {
      response.status(500).end()
    })
})


module.exports = router