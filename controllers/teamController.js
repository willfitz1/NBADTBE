const { Team } = require('../models')

const createTeam = async (req, res) => {
  try {
    const team = await new Team(req.body)
    await team.save()
    return res.status(201).json({
      team
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
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

const getTeamById = async (req, res) => {
  try {
    let teamId = req.params.team_id
    let team = await Team.findById(teamId)
    res.send(team)
  } catch (error) {
    throw error
  }
}

const deleteTeamById = async (req, res) => {
  try {
    let teamId = req.params.team_id
    let team = await Team.findByIdAndDelete(teamId)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTeams,
  createTeam,
  deleteTeamById,
  getTeamById
}
