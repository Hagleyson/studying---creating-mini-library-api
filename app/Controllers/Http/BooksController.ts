import {
  DeleteBookService,
  UpdateBookService,
  CreateBookService,
} from './../../modules/Books/service/index'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BooksController {
  public async store(ctx: HttpContextContract) {
    const { name, actor, edition, code } = ctx.request.body()
    return new CreateBookService().execute({ ctx, body: { name, actor, edition, code } })
  }
  public async update(ctx: HttpContextContract) {
    const { name, actor, edition } = ctx.request.body()
    return new UpdateBookService().execute({ ctx, body: { name, actor, edition } })
  }
  public async destroy(ctx: HttpContextContract) {
    const secureId = ctx.request.param('secure_id')
    return new DeleteBookService().execute({ secureId })
  }
}
