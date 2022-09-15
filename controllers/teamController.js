const { Team } = require('../models')

const createTeam = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let teamBody = {
      userId,
      ...req.body
    }
    let team = await Team.create(teamBody)
    res.send(team)
  } catch (error) {
    throw error
  }
}

const getAllTeams = async (req, res) => {
  try {
    let allTeams = await Team.find()
    return res.status(200).json(allTeams)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTeamByUser = async (req, res) => {
  try {
    user_Id = parseInt(req.params.user_id)
    let allTeams = await Team.findAll({ where: { userId: user_Id } })
    res.send(allTeams)
  } catch (error) {
    throw error
  }
}

// const updateTeam = async (req, res) => {
//   try {
//     let teamId = req.params.team_id
//     let updatedTeam = await Team.update(req.body, {
//       where: {
//         id: teamId
//       }
//     })
//     res.send(updatedTeam)
//   } catch (error) {
//     throw error
//   }
// }

const deleteTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    await Team.destroy({ where: { id: teamId } })
    res.send({ message: 'Team deleted.' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTeams,
  createTeam,
  // updateTeam,
  deleteTeam,
  getTeamByUser
}
