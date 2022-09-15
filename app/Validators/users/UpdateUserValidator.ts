import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.minLength(3)]),
    last_name: schema.string({}, [rules.minLength(3)]),
    sexo: schema.string(),
    birth_date: schema.date({ format: 'dd/mm/yyyy' }),
    type: schema.enum(['admin', 'user'] as const),
    email: schema.string({}, [rules.email()]),
    cpf: schema.string({}, [rules.minLength(11), rules.maxLength(11)]),
  })

  public messages: CustomMessages = {}
}
