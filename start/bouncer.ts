import User from 'App/Models/User'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer.define('user', (user: User, updatedUser: User) => {
  return user.id === updatedUser.id
}).define('userTypeAdm', (user: User) => {
  return user.type === 'admin'
})

export const { policies } = Bouncer.registerPolicies({})
