import { validator } from '@ioc:Adonis/Core/Validator'

import { CustomMessages, BookValidator } from 'App/Validators/index'

import { CreateBookRepository } from '../Repositories/index'
import { TCreateAndUpdateBook } from '../type'

export class CreateBookService {
  public async execute({ ctx, body }: TCreateAndUpdateBook) {
    const userStoreValidator = new BookValidator(ctx)
    await validator.validate({
      schema: userStoreValidator.schema,
      data: body,
      messages: new CustomMessages().messages,
    })

    return new CreateBookRepository().handle({ ctx, body })
  }
}
