const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = userSchema
