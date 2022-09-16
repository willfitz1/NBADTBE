const { Router } = require('express')
const router = Router()
const playerRouter = require('./playerRouter')
const teamRouter = require('./teamRouter')
const userRouter = require('./userRouter')
const authRouter = require('./authRouter')

router.get('/', (req, res) => res.send('This is root!'))
router.use('/player', playerRouter)
router.use('/team', teamRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router
