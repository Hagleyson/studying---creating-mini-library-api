import { Exception } from '@adonisjs/core/build/standalone'
import Book from 'App/Models/Book'
import { TCreateAndUpdateBook } from '../type'

export class CreateBookRepository {
  public async handle({ ctx, body }: TCreateAndUpdateBook) {
    try {
      return await Book.create({ ...body })
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
