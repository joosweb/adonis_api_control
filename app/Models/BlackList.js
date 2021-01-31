'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BlackList extends Model {
  user () {
    return this.hasOne('App/Models/User', 'fk_user_id', 'id').select('id','username', 'email')
  }

  building () {
    return this.hasOne('App/Models/Building', 'fk_building_id', 'id').select('id','name')
  }
}

module.exports = BlackList
