'use strict'

const Building = use('App/Models/Building')

class BuildingController {

  async index ({ request, response, auth }) {
    try {
      await auth.getUser()
      const buildings = await Building.all();
      return buildings
    } catch (error) {
      return response.json({message: error})
    }
  }


  async create ({ request, response, view }) {
  }

  async store ({ request, response, auth }) {
      try {
         await auth.getUser()
         const { name } = request.all()
         const building = await Building.create({name})
         return response.json({message: 'Building Created!'})
       } catch (error) {
         return response.json({message: error })
      }
  }


  async show ({ params, request, response, auth }) {
    try {
       await auth.getUser()
       const building = await Building.find(params.id)
       return building
     } catch (error) {
       return response.json({message: error })
    }
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response, auth }) {
    try {
      await auth.getUser()
      const building = await Building.find(params.id)
      building.name = request.input('name')
      await building.save()
      return response.json({message: 'Building Updated!'})
    } catch (e) {
      return response.json({message: error })
    }
  }


  async destroy ({ params, request, response }) {
    try {
      await auth.getUser()
      const building = await Building.find(params.id)
      await building.delete()
      return response.json({message: 'Building deleted!'})
    } catch (error) {
      return response.json({message: error })
    }
  }
}

module.exports = BuildingController
