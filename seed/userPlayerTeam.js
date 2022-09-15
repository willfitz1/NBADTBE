const db = require('../db')
const { Team, User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const team = [{ name: 'test', players: '5' }]

  // const jobPosts = [
  //   { employer: employers[0]._id, title: 'Associate Software Developer', description: 'Some type of description', requirements: 'JavaScript, React, Python, SQL', location: 'Houston / Remote', salary: 'Unavailable', application_url: 'someURL' },
  //   { employer: employers[1]._id, title: 'Registered Nurse (RN)', description: 'We are looking for a competent RN - Operating Room Nurse to join our dynamic dream team of healthcare professionals in order to provide the highest quality care making critical decisions and leading on clinical issues within a person-centered care model.', requirements: '1 year of recent experience, Current certifications, Critical thinker and problem solver', location: 'Houston, TX', salary: '$37.78 to $60.67 Hourly', application_url: 'another URL' },
  //   { employer: employers[2]._id, title: 'Construction Manager(PDMG)', description: 'We are currently accepting resumes for future and current project work. Qualified candidates will be contacted once next steps have been identified.', requirements: 'High School diploma., 5 years of relevant construction experience', location: 'Houston, TX', salary: '$40 to $60 Hourly', application_url: 'third URL' }
  // ]

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
