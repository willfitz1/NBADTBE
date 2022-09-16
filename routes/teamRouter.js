const { Router } = require('express')
const router = Router()
const controller = require('../controllers/teamController')
const middleware = require('../middleware')

router.get('/all', controller.getAllTeams)

router.get('/:team_id', controller.getTeamById)

router.post(
  '/:team_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createTeam
)

router.delete(
  '/:team_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteTeamById
)

module.exports = router
