import express from 'express'
import { prob02 } from '../problem_logic/prob_02'
import { prob01 } from '../problem_logic/prob_01'

const router = express.Router()

router.get('/01', (req, res) => {
  const num:number = prob01()
  res.send('' + num)
})

router.get('/02', (req, res) => {
  const num:number = prob02()
  res.send('' + num)
})

export = router
