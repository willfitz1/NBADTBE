const { Player } = require('../models')

const createPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({
      player
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPlayers = async (req, res) => {
  try {
    let allPlayers = await Player.find()
    return res.status(200).json(allPlayers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlayerByTeam = async (req, res) => {
  try {
    user_Id = parseInt(req.params.user_id)
    let allPlayers = await Player.findAll({ where: { userId: user_Id } })
    res.send(allPlayers)
  } catch (error) {
    throw error
  }
}

const updatePlayerById = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(player)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlayerById = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Player.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Player deleted')
    }
    throw new Error('Player not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPlayers,
  createPlayer,
  updatePlayerById,
  deletePlayerById,
  getPlayerByTeam
}
