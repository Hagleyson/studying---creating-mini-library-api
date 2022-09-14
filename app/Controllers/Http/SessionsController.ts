import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateSessionService } from '../../modules/Session/Services/index'

export default class SessionsController {
  public async store(ctx: HttpContextContract) {
    const { email, password } = ctx.request.body()
    return new CreateSessionService().execute({ ctx, body: { email, password } })
  }
}
