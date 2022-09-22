import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    actor: schema.string.optional(),
    edition: schema.string.optional(),
    genre: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
