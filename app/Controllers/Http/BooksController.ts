import { CreateBookService } from './../../modules/Books/service/CreateBookService'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BooksController {
  public async store(ctx: HttpContextContract) {
    const { name, actor, edition, code } = ctx.request.body()
    return new CreateBookService().execute({ ctx, body: { name, actor, edition, code } })
  }
}
