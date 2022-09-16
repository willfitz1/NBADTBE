const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers')
const middleware = require('../middleware')

// get routes

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  userController.getAllUsers
)
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.getUserById
)

// post routes
router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  userController.createUser
)

// update routes
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.updateUserById
)

// delete routes
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.deleteUserById
)

module.exports = router
