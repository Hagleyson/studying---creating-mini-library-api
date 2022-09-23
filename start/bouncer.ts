import User from 'App/Models/User'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer.define('user', (user: User, updatedUser: User) => {
  return user.id === updatedUser.id
})
  .define('userTypeAdm', (user: User) => {
    return user.type === 'admin'
  })
  .define('loanBooks', (user: User, currentUser: User) => {
    return user.type === 'admin' || currentUser.id === user.id
  })

export const { policies } = Bouncer.registerPolicies({})
