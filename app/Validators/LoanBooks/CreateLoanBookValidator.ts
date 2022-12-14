import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateLoanBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    userSecureId: schema.string(),
    bookSecureId: schema.string(),
    closingDate: schema.date({ format: 'dd/mm/yyyy' }),
  })

  public messages: CustomMessages = {}
}
