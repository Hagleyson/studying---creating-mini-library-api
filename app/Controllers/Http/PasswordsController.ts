import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { ForgotPasswordService } from 'App/modules/RecoveryPassword/service'

export default class PasswordsController {
  public async forgotPassword(ctx: HttpContextContract) {
    const { email, url } = ctx.request.body()
    return new ForgotPasswordService().execute({ ctx, body: { email, url } })
  }
}
