const express = require('express')
const handlebars = require('express-handlebars')

const burgerRoutes = require('./controllers/burgers_controller')


const PORT = process.env.PORT || 3000


let app = express()

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(burgerRoutes)

app.listen(PORT, function() {
  console.log(`App now listening at PORT ${PORT}`);
})
