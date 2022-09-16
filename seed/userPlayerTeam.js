const db = require('../db')
const { Team, User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const team = [{ name: 'test', players: '5' }]

  const user = [
    { username: 'testeam', email: 'test@gmail.com', password: 'testest' }
  ]

  await Team.insertMany(team)
  console.log('Created some teams!')
  await User.insertMany(user)
  console.log('Created some users!')
}
const run = async () => {
  await main()
  db.close()
}

run()
