'use strict'

const User = use('App/Models/User')


class UserController {

  async login({ request, auth}) {
    const { email, password } = request.all()
    const token = await auth.attempt(email,password)
    return token
  }

  async index ({ request, response, view, auth }) {
      try {
          await auth.getUser()
          const page = request.input('page', 1)
          const limit = 10
          const users = await User.query().paginate(page, limit)
          return users;
        } catch (error) {
          return response.json({message: 'Api token required!'})
      }
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
     const { username, email, password } = request.all();
     const user = await User.create({
        username,
        email,
        password,
     });
     return this.login(...arguments)
  }


  async show ({ params, request, response, auth }) {
    try {
      await auth.getUser()
      const user = await User.find(params.id)
      return user
    } catch (error) {
      return response.json({message: 'Api token required!'})
    }
  }


  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    try {
      await auth.getUser()
      let user = await User.find(params.id);
      user.username = request.input('username');
      user.email    = request.input('email');
      user.password = request.input('password');
      await user.save();
      return response.json({message: 'User Updated!'})
    } catch (error) {
      response.send('Missing or invalid api token')
    }
  }

  async destroy ({ params, request, response }) {
    try {
      await auth.getUser()
      const user = await User.find(params.id)
      await user.delete()
      return response.json({message: 'User deleted!'})
    } catch (error) {
      response.send('Missing or invalid api token')
    }
  }
}

module.exports = UserController
