/* eslint-disable promise/no-nesting */
const express = require('express')

const db = require('../db/connection')

const router = express.Router()

// Get Routes

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

// router.get('/cat/:cat', (req, res) => {
//   const cat = req.params.cat
//   db.getLiftsByCat(cat)
//     .then(results => {
//       res.json(results)
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong ' })
//     })
// })

// router.get('/ex/:ex', (req, res) => {
//   const ex = req.params.ex
//   db.getLiftsByExercise(ex)
//     .then(results => {
//       res.json(results)
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong ' })
//     })
// })

// router.get('/one/:id', (req, res) => {
//   const id = req.params.id
//   db.getOneLift(id)
//     .then(result => {
//       res.json(result)
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong ' })
//     })
// })

// Post Routes

router.post('/add', (req, res) => {
  const lift = req.body
  db.addLift(lift)
    .then(newId => {
      db.getOneLift(newId)
        .then(result => {
          res.json(result)
          return null
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Something went wrong ' })
        })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong ' })
    })
})

// Patch Routes

router.patch('/edit', (req, res) => {
  const lift = req.body
  db.updateLift(lift)
    .then(updated => {
      db.getOneLift(lift.id)
        .then(result => {
          res.json(result)
          return null
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Something went wrong ' })
        })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong ' })
    })
})

// Delete Routes

router.delete('/delete', (req, res) => {
  const id = req.body.id
  db.deleteLift(id)
    .then(result => {
      res.json({ message: `${result} entry deleted` })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong ' })
    })
})

module.exports = router
