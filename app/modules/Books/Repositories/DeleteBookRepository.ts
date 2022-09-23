import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Book from 'App/Models/Book'
import { TDeleteBook } from '../type'

export class DeleteBookRepository {
  public async handle({ ctx, secureId }: TDeleteBook) {
    try {
      await ctx.bouncer.authorize('userTypeAdm')

      const book = await Book.findBy('secure_id', secureId)
      if (!book) {
        throw new NotFoundException('There is no book for this secure id', 404, 'E_NOT_FOUND')
      }
      book.delete()
      await book.save()
      return book
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
