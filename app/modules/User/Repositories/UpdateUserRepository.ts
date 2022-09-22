import { TUser } from './../type'
import { Exception } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'
import NotFoundException from 'App/Exceptions/NotFoundException'
import moment from 'moment'

export class UpdateUserRepository {
  public async handle({ ctx, body }: TUser) {
    const secureId = ctx.request.param('id')
    try {
      const user = await User.findBy('secure_id', secureId)

      if (!user) {
        throw new NotFoundException('There is no user for this secure id', 404, 'E_NOT_FOUND')
      }
      let newUser = { ...body }
      if (body.birth_date) {
        newUser = { ...newUser, birth_date: moment(body.birth_date, 'DD/MM/YYYY').toDate() }
      }
      user.merge({
        ...newUser,
      })
      await user.save()
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
