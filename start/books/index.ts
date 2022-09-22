import Route from '@ioc:Adonis/Core/Route'

Route.post('/book', 'BooksController.store')
Route.put('/book/:secure_id', 'BooksController.update')
Route.delete('/book/:secure_id', 'BooksController.destroy')
Route.get('/book', 'BooksController.index')
