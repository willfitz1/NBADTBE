const { Router } = require('express')
const router = Router()
const { authController } = require('../controllers')

router.post('/register', authController.Register)

module.exports = router
