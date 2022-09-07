import { Exception } from '@adonisjs/core/build/standalone'
import { UserDTO } from 'App/Dtos'
import User from 'App/Models/User'
import moment from 'moment'
export class CreateUserRepository {
  public async handle(body: UserDTO) {
    try {
      await User.create({
        ...body,
        birth_date: moment(body.birth_date, 'DD/MM/YYYY').toDate(),
      })
    } catch (error) {
      console.log(error.sqlMessage)
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
