exports.up = function (knex) {
  return knex.schema.createTable('lifts', table => {
    table.increments('id')
    table.string('category')
    table.string('exercise')
    table.decimal('weight')
    table.integer('reps')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('lifts')
}
