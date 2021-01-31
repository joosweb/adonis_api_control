'use strict'

const Route = use('Route')

// Auth
Route.post('/login', 'UserController.login')

// User Crud
Route.resource('/users', 'UserController')

// Buildings Crud
Route.resource('/building', 'BuildingController')

// Records
Route.post('/records', 'RecordController.store')
