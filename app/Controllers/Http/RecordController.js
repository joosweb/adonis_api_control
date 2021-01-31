'use strict'

const Records = use('App/Models/Record')
const BlackList = use('App/Models/BlackList')

class RecordController {

  async index ({ request, response }) {
  }


  async create ({ request, response }) {
  }

  async isBlock(user_id) {
      const user = BlackList.query().where('fk_user_id', user_id)
      const userResult = await user.with('user').with('building').first()
      if(userResult) {
        return {
          block: true,
          user_block: userResult.toJSON().user,
          builind: userResult.toJSON().building,
          observation: userResult.toJSON().observation
        }
      } else {
        return false
      }
  }

  async store ({ request, response, auth }) {
    try {
      await auth.getUser()
      const isBlock = await this.isBlock(request.input('fk_user_id'))
      if(isBlock) {
        return isBlock
      }
      const record = await Records.create({
        fk_user_id: request.input('fk_user_id'),
        fk_building_id: request.input('fk_building_id'),
        action: request.input('action'), // 0 = in | 1 = Out
      })
      if(request.input('action') == 0) {
        return response.json({message: 'Your entry was registered at ' + record.created_at })
      } else {
        return response.json({message: 'Your out was registered at ' + record.created_at })
      }
    } catch (e) {
      return response.json({message: error})
    }
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = RecordController
