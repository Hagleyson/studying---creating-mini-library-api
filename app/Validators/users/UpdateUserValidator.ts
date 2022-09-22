import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({}, [rules.minLength(3)]),
    last_name: schema.string.optional({}, [rules.minLength(3)]),
    sexo: schema.string.optional(),
    birth_date: schema.date.optional({ format: 'dd/mm/yyyy' }),
    type: schema.enum.optional(['admin', 'user'] as const),
    email: schema.string.optional({}, [rules.email()]),
    cpf: schema.string.optional({}, [rules.minLength(11), rules.maxLength(11)]),
  })

  public messages: CustomMessages = {}
}
