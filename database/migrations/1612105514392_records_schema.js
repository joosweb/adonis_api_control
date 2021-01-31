'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecordsSchema extends Schema {
  up () {
    this.create('records', (table) => {
      table.increments()
      table.integer('fk_user_id', 10).unsigned().notNullable()
      table.integer('fk_building_id', 10).unsigned().notNullable()
      table.boolean('action')
      table.timestamps()
    })
  }

  down () {
    this.drop('records')
  }
}

module.exports = RecordsSchema
