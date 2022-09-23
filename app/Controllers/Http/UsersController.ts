import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  ListAllUsersServices,
  CreateUserService,
  DeleteUserService,
  UpdateUserService,
} from 'App/modules/User/Services'
import { UserDTO } from 'App/Dtos'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    return new ListAllUsersServices().execute({ ctx })
  }

  public async update(ctx: HttpContextContract) {
    const body = ctx.request.body() as UserDTO
    return new UpdateUserService().execute({ ctx, body })
  }

  public async store(ctx: HttpContextContract) {
    const body = ctx.request.body() as UserDTO
    return new CreateUserService().execute({ ctx, body })
  }

  public async destroy(ctx: HttpContextContract) {
    const secureId = ctx.request.param('id')
    return new DeleteUserService().execute({ ctx, secureId })
  }
}
