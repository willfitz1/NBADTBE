const mongoose = require('mongoose')
const userSchema = require('./user')
const playerSchema = require('./player')
const teamSchema = require('./team')

const User = mongoose.model('User', userSchema)
const Player = mongoose.model('Player', playerSchema)
const Team = mongoose.model('Team', teamSchema)

module.exports = {
  User,
  Player,
  Team
}
