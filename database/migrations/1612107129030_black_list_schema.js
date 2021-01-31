'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlackListSchema extends Schema {
  up () {
    this.create('black_lists', (table) => {
      table.increments()
      table.integer('fk_user_id', 10).unsigned().notNullable()
      table.integer('fk_building_id', 10).unsigned().notNullable()
      table.text('observation')
      table.timestamps()
    })
  }

  down () {
    this.drop('black_lists')
  }
}

module.exports = BlackListSchema
