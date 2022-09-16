const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const app = express()
const db = require('./db')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
