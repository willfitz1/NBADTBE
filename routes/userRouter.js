const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers')

// get routes

router.get(
  '/',
  // userController.stripToken,
  // userController.verifyToken,
  userController.getAllUsers
)
router.get(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  userController.getUserById
)

// post routes
router.post('/new', userController.createUser)

// update routes
router.put(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  userController.updateUserById
)

// delete routes
router.delete(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  userController.deleteUserById
)

module.exports = router
