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

function getOneLift (id, db = connection) {
  return db('lifts')
    .where('id', id)
    .first()
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
  addLift,
  getAllLifts,
  getOneLift,
  updateLift,
  deleteLift
}
