import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateLoanBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_secure_id: schema.string(),
    book_secure_id: schema.string(),
    closing_date: schema.date({ format: 'dd/mm/yyyy' }),
  })

  public messages: CustomMessages = {}
}
