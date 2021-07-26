const express = require('express')

const db = require('../db/connection')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllLifts()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong ' })
    })
})

module.exports = router
