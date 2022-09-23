import Book from 'App/Models/Book'
import LoanBook from 'App/Models/LoanBook'
import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'

import { TListAllLoanBooksByBook } from '../type'
import moment from 'moment'

export class ListAllLoanBooksByBooksRepository {
  public async handle({
    noPaginate,
    page,
    perPage,
    bookSecureId,
    status,
    closingDate,
    bookName,
  }: TListAllLoanBooksByBook) {
    try {
      const book = await Book.findBy('secure_id', bookSecureId)

      if (!book) {
        throw new NotFoundException('There is no book for this secure id', 404, 'E_NOT_FOUND')
      }
      if (noPaginate) {
        const count = await LoanBook.query().pojo<{ count: number }>().count('id as count')
        perPage = count[0].count
      }

      return await LoanBook.query()
        .preload('user')
        .where((query) => {
          if (status) {
            query.andWhere('status', status)
          }
          if (closingDate) {
            query.andWhere('closing_date', moment(closingDate, 'DD/MM/YYYY').toDate())
          }
        })
        .andWhereHas('book', (bookFind) => {
          bookFind.where('id', book.id)
          if (bookName) {
            bookFind.where('name', 'like', `%${bookName}%`)
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
