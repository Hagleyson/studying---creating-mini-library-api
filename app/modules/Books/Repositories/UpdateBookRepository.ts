import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Book from 'App/Models/Book'
import { TCreateAndUpdateBook } from '../type'

export class UpdateBookRepository {
  public async handle({ ctx, body }: TCreateAndUpdateBook) {
    const { name, actor, edition, code } = body
    try {
      const bookSecureId = ctx.request.param('secure_id')
      const book = await Book.findBy('secure_id', bookSecureId)
      if (!book) {
        throw new NotFoundException('There is no book for this secure id', 404, 'E_NOT_FOUND')
      }
      book.merge({ name, actor, edition, code })
      await book.save()
      return ctx.response.ok({ ...body })
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
