import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateLoanBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    closingDate: schema.date.optional({ format: 'dd/mm/yyyy' }),
    status: schema.enum.optional(['active', 'inactive']),
  })

  public messages: CustomMessages = {}
}
