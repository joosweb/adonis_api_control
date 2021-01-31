'use strict'

/*
|--------------------------------------------------------------------------
| BlackListSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const BlackList = use('App/Models/BlackList')

class BlackListSeeder {

  randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }

  async run () {
    for (var i = 1; i < 3; i++) {
        await BlackList.create({
          fk_user_id: i,
          fk_building_id: this.randomNumber(1,5),
          observation: 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
        })
    }
  }
}

module.exports = BlackListSeeder
