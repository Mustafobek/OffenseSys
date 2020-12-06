// --------------------------- IMPORT NATIVE MODULES
require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const ejs = require('ejs')
const morgan = require('morgan')
const cors = require('cors')
const _ = require('lodash')

const PORT = process.env.PORT || 8001
const app = express()


// --------------------------- IMPORT LOCAL MODULES

const mainRoute = require('./routes/home')
const composeRoute = require('./routes/compose')
const errorRoute = require('./routes/error')
const employeeRoute = require('./routes/employee')

const Employee = require('./models/Employee')
const Offense = require('./models/Offense')



// --------------------------- NATIVE PLUGINS

require('./database/mongoose')


// --------------------------- NATIVE PLUGINS

app.use(morgan('dev'))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')


// --------------------------- LOCAL PLUGINS

app.use('', mainRoute)
app.use('', composeRoute)
app.use('', errorRoute)
app.use('', employeeRoute)


// --------------------------- LISTENER AND EXPORT

app.listen(PORT, () => console.log(`Server is on port ${PORT}`))

module.exports = app