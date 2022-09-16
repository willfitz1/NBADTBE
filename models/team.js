const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    player: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
  },
  { timestamps: true }
)

module.exports = teamSchema
