const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const app = express()
const db = require('./db')

const PlayerRouter = require('./routes/PlayerRouter')
const TeamRouter = require('./routes/TeamRouter')
const UserRouter = require('./routes/UserRouter')
const PORT = process.env.PORT || 3001

app.use('/api', routes)

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
// app.use('/player', PlayerRouter)
// app.use('/team', TeamRouter)
// app.use('/user', UserRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
