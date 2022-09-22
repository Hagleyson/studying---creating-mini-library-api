import {
  ListAllBooksService,
  DeleteBookService,
  UpdateBookService,
  CreateBookService,
} from './../../modules/Books/service/index'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BooksController {
  public async index(ctx: HttpContextContract) {
    const { name, actor, edition, code, genre, page, perPage, noPaginate } = ctx.request.qs()
    return new ListAllBooksService().execute({
      name,
      actor,
      edition,
      code,
      genre,
      page,
      perPage,
      noPaginate,
    })
  }
  public async store(ctx: HttpContextContract) {
    const { name, actor, edition, code, genre } = ctx.request.body()
    return new CreateBookService().execute({ ctx, body: { name, actor, edition, code, genre } })
  }
  public async update(ctx: HttpContextContract) {
    const { name, actor, edition, genre } = ctx.request.body()
    return new UpdateBookService().execute({ ctx, body: { name, actor, edition, genre } })
  }
  public async destroy(ctx: HttpContextContract) {
    const secureId = ctx.request.param('secure_id')
    return new DeleteBookService().execute({ secureId })
  }
}
