import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ListAllUsersServices } from 'App/modules/User/Services'

export default class UsersController {
  public async index({ request }: HttpContextContract) {
    return new ListAllUsersServices().execute(request.all())
  }
}
