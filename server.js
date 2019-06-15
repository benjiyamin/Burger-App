const express = require('express')
const handlebars = require('express-handlebars')

const apiRoutes = require('./app/routes/api_routes')


let app = express()

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Template engine
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//burgerRoutes(app)
app.use(apiRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`App now listening at PORT ${PORT}`);
})