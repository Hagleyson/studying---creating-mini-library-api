import { validator } from '@ioc:Adonis/Core/Validator'

import { CustomMessages, UpdateLoanBookValidator } from 'App/Validators/index'

import { UpdateLoanBooksRepository } from '../Repositories/index'
import { TUpdateLoanBook } from '../type'

export class UpdateLoanBooksService {
  public async execute({ ctx, body }: TUpdateLoanBook) {
    const userStoreValidator = new UpdateLoanBookValidator(ctx)
    await validator.validate({
      schema: userStoreValidator.schema,
      data: body,
      messages: new CustomMessages().messages,
    })

    return new UpdateLoanBooksRepository().handle({ ctx, body })
  }
}
