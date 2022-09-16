const { User } = require('../models')
const middleware = require('../middleware')

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, passwordDigest, name })
    res.send(user)
  } catch (error) {
    throw error
  }
}
module.exports = {
  CheckSession,
  Login,
  Register
}
