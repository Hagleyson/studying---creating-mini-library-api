import { validator } from '@ioc:Adonis/Core/Validator'

import { CustomMessages, ForgotPasswordValidator } from 'App/Validators/index'

import { ForgotPasswordRepository } from '../Repositories/index'
import { TSessionDTO } from '../type'

export class ForgotPasswordService {
  public async execute({ ctx, body }: TSessionDTO) {
    const userStoreValidator = new ForgotPasswordValidator(ctx)
    await validator.validate({
      schema: userStoreValidator.schema,
      data: body,
      messages: new CustomMessages().messages,
    })

    return new ForgotPasswordRepository().handle({ ctx, body })
  }
}
