import { Score } from '../models/score.js'

const index = async(req, res) => {
  try{
    let result = await Score.find({})
    result.sort((a,b) => b.score - a.score)
    return res.status(201).json(result)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ err: err.message })
  }
}

const update = async(req, res) => {
  try{
    let score = await Score.findById(req.params.id)
    score.score = score.score + 1
    score.save()
    return res.status(201).json(score)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ err: err.message })
  }
}

const updateDown = async(req, res) => {
  try{
    let score = await Score.findById(req.params.id)
    if(score.score > 0) score.score = score.score - 1
    score.save()
    return res.status(201).json(score)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ err: err.message })
  }
}

const add = async(req,res) => {
  try {
    let score = await Score.create(req.body)
    return res.status(201).json(score)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ err: err.message })
  }
}

export { index, update, updateDown, add }