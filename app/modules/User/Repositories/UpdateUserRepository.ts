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
      user.merge({
        name: body.name,
        last_name: body.last_name,
        sexo: body.sexo,
        birth_date: moment(body.birth_date, 'DD/MM/YYYY').toDate(),
        type: body.type,
        email: body.email,
        cpf: body.cpf,
        user_name: body.user_name,
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
