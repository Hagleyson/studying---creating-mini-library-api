import { TDeleteUser } from './../type'
import { Exception } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'

export class ListAllUserRepository {
  public async handle({ secureId }: TDeleteUser) {
    try {
      const user = await User.query()

      return user
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
