const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

// Create
function addLift (lift, db = connection) {
  return db('lifts')
    .insert(lift)
}
// Read
function getAllLifts (db = connection) {
  return db('lifts')
    .select()
}

function getLiftsByCat (cat, db = connection) {
  return db('lifts')
    .where('category', cat)
    .select()
}

function getOneLift (id, db = connection) {
  return db('lifts')
    .where('id', id)
    .first()
    .select()
}

function getLiftsByExercise (exercise, db = connection) {
  return db('lifts')
    .where('exercise', exercise)
    .select()
}
// Update
function updateLift (lift, db = connection) {
  return db('lifts')
    .where('id', lift.id)
    .update(lift)
}
// Delete
function deleteLift (id, db = connection) {
  return db('lifts')
    .where('id', id)
    .del()
}

module.exports = {
  connection,
  addLift,
  getAllLifts,
  getLiftsByCat,
  getOneLift,
  getLiftsByExercise,
  updateLift,
  deleteLift
}
