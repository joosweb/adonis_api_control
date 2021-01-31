'use strict'

 const Factory = use('Factory')
 const Hash = use('Hash')

 Factory.blueprint('App/Models/User', async (faker) => {
   return {
     username: faker.first() + ' ' + faker.last(),
     email: faker.email(),
     password: await Hash.make(faker.password())
   }
 })

 Factory.blueprint('App/Models/Building', (faker) => {
   return {
     name: faker.animal(),
   }
 })
