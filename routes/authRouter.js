const { Router } = require('express')
const router = Router()
const { authController } = require('../controllers')

router.post('/register', authController.Register)

router.post('/login', authController.Login)

module.exports = router
