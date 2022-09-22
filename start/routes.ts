import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
import './sessions/index'
import './user/index'
import './password/index'
import './books/index'
import './loanBook/index'
