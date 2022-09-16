const { Router } = require('express')
const router = Router()
const { authController } = require('../controllers')
const middleware = require('../middleware')

router.post('/register', authController.Register)

router.post('/login', authController.Login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
)

module.exports = router
