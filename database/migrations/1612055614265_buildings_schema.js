'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingsSchema extends Schema {
  up () {
    this.create('buildings', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('buildings')
  }
}

module.exports = BuildingsSchema
