import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class BookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    actor: schema.string(),
    edition: schema.string(),
    code: schema.string(),
  })

  public messages: CustomMessages = {}
}
