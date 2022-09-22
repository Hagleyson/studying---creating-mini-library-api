import Book from 'App/Models/Book'
import { Exception } from '@adonisjs/core/build/standalone'

import { TListAllBooks } from '../type'

export class ListAllBooksRepository {
  public async handle({
    name,
    actor,
    edition,
    code,
    genre,
    page,
    perPage,
    noPaginate,
  }: TListAllBooks) {
    try {
      if (noPaginate) {
        const count = await Book.query().pojo<{ count: number }>().count('id as count')
        perPage = count[0].count
      }
      return await Book.query()
        .where((query) => {
          if (name) {
            query.andWhere('name', 'like', `%${name}%`)
          }
          if (actor) {
            query.andWhere('actor', 'like', `%${actor}%`)
          }
          if (edition) {
            query.andWhere('edition', 'like', `%${edition}%`)
          }
          if (code) {
            query.andWhere('code', 'like', `%${code}%`)
          }
          if (genre) {
            query.andWhere('genre', 'like', `%${genre}%`)
          }
        })
        .paginate(page, perPage)
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
