import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    actor: schema.string(),
    edition: schema.string(),
    code: schema.string(),
    genre: schema.string(),
  })

  public messages: CustomMessages = {}
}
