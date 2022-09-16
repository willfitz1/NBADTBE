const { Router } = require('express')
const router = Router()
const controller = require('../controllers/teamController')
const middleware = require('../middleware')

router.get('/all', controller.getAllTeams)

// router.get(
//   '/:user_id'
// middleware.stripToken,
// middleware.verifyToken,
// controller.getTeamByUser
// )
router.post(
  '/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.createTeam
)
router.put(
  '/:team_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.updateTeamById
)
router.delete(
  '/:team_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteTeam
)

module.exports = router
