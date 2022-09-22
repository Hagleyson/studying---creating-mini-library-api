import { UpdateBookService } from './../../modules/Books/service/UpdateBookService'
import { CreateBookService } from './../../modules/Books/service/CreateBookService'
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
}
