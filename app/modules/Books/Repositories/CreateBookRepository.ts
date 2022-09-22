import { Exception } from '@adonisjs/core/build/standalone'
import Book from 'App/Models/Book'
import { TCreateAndUpdateBook } from '../type'

export class CreateBookRepository {
  public async handle({ ctx, body }: TCreateAndUpdateBook) {
    const { name, actor, edition, code } = body

    try {
      await Book.create({ name, actor, edition, code })
      return body
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
