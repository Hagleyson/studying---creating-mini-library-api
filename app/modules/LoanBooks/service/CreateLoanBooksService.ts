import { validator } from '@ioc:Adonis/Core/Validator'

import { CustomMessages, CreateLoanBookValidator } from 'App/Validators/index'

import { CreateLoanBooksRepository } from '../Repositories/index'
import { TCreateLoanBook } from '../type'

export class CreateLoanBooksService {
  public async execute({ ctx, body }: TCreateLoanBook) {
    const userStoreValidator = new CreateLoanBookValidator(ctx)
    await validator.validate({
      schema: userStoreValidator.schema,
      data: body,
      messages: new CustomMessages().messages,
    })

    return new CreateLoanBooksRepository().handle({ ctx, body })
  }
}
