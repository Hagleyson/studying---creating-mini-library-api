import Route from '@ioc:Adonis/Core/Route'

Route.post('/book', 'BooksController.store').middleware('auth')
Route.put('/book/:secure_id', 'BooksController.update').middleware('auth')
Route.delete('/book/:secure_id', 'BooksController.destroy').middleware('auth')
Route.get('/book', 'BooksController.index').middleware('auth')
