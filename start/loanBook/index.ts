import Route from '@ioc:Adonis/Core/Route'

Route.post('/loanBook', 'LoanBooksController.store').middleware('auth')
Route.put('/loanBook/:secureId', 'LoanBooksController.update').middleware('auth')
Route.get('/loanBooksUser', 'LoanBooksController.ListAllByUser').middleware('auth')
Route.get('/loanBooksBook', 'LoanBooksController.ListAllByBook').middleware('auth')
