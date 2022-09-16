const { Router } = require('express')
const router = Router()
const { playerController } = require('../controllers')
const middleware = require('../middleware')

// get routes

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.getAllPlayers
)
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.getPlayerByTeam
)

// post routes
router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.createPlayer
)

router.post(
  '/new/:team_id',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.createPlayerForTeam
)

// update routes
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.updatePlayerById
)

// delete routes
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  playerController.deletePlayerById
)

module.exports = router
