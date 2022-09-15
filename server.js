const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { User } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/user', async (req, res) => {
  const user = await User.find({})
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
