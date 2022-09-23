import Route from '@ioc:Adonis/Core/Route'

Route.post('/loanBook', 'LoanBooksController.store')
Route.put('/loanBook/:secureId', 'LoanBooksController.update')
Route.get('/loanBooksUser', 'LoanBooksController.ListAllByUser')
