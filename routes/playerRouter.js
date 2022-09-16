const { Router } = require('express')
const router = Router()
const { playerController } = require('../controllers')

// get routes

router.get(
  '/',
  // userController.stripToken,
  // userController.verifyToken,
  playerController.getAllPlayers
)
router.get(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  playerController.getPlayerByTeam
)

// post routes
router.post('/new', playerController.createPlayer)

// update routes
router.put(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  playerController.updatePlayerById
)

// delete routes
router.delete(
  '/:id',
  // userController.stripToken,
  // userController.verifyToken,
  playerController.deletePlayerById
)

module.exports = router
