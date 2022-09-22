import { validator } from '@ioc:Adonis/Core/Validator'

import { CustomMessages, UpdateBookValidator } from 'App/Validators/index'

import { UpdateBookRepository } from '../Repositories/index'
import { TCreateAndUpdateBook } from '../type'

export class UpdateBookService {
  public async execute({ ctx, body }: TCreateAndUpdateBook) {
    const userStoreValidator = new UpdateBookValidator(ctx)
    await validator.validate({
      schema: userStoreValidator.schema,
      data: body,
      messages: new CustomMessages().messages,
    })

    return new UpdateBookRepository().handle({ ctx, body })
  }
}
