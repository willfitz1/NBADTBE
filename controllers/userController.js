const { User } = require('../models')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypth')
// const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
// const APP_SECRET = `${process.env.APP_SECRET}`

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    req.body.passwordDigest = hashedPassword
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      res.status(200).json({ user })
    }
    return res.status(404).send('User with the ID requested does not exist!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  registerUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
}
