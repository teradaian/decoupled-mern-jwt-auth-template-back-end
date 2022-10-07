import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
  name: String,
  score: {type: Number, default: 0},
},{
  timestamps: true,
})

const Score = mongoose.model('Score', scoreSchema)

export { Score }
