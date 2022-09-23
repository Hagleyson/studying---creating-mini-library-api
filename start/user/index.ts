import Route from '@ioc:Adonis/Core/Route'

Route.post('users', 'UsersController.store')
Route.get('users', 'UsersController.index').middleware('auth')
Route.put('users/:id', 'UsersController.update').middleware('auth')
Route.delete('users/:id', 'UsersController.destroy').middleware('auth')
