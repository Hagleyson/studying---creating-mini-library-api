import User from 'App/Models/User'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer.define('updateUser', (user: User, updatedUser: User) => {
  return user.id === updatedUser.id
})

export const { policies } = Bouncer.registerPolicies({})
