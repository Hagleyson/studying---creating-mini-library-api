/* eslint-disable @typescript-eslint/naming-convention */
import User from 'App/Models/User'
import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Book from 'App/Models/Book'
import { TCreateLoanBook } from '../type'
import moment from 'moment'
import LoanBook from 'App/Models/LoanBook'

export class CreateLoanBooksRepository {
  public async handle({ ctx, body }: TCreateLoanBook) {
    const { book_secure_id, user_secure_id, closing_date } = body
    try {
      const book = await Book.findBy('secure_id', book_secure_id)
      if (!book) {
        throw new NotFoundException('There is no book for this secure id', 404, 'E_NOT_FOUND')
      }

      const user = await User.findBy('secure_id', user_secure_id)
      if (!user) {
        throw new NotFoundException('There is no user for this secure id', 404, 'E_NOT_FOUND')
      }

      const isBorrowedBook = await LoanBook.query()
        .where('book_id', book.id)
        .andWhere('status', 'active')

      if (isBorrowedBook.length > 0) {
        throw new NotFoundException('This book is currently on loan', 410, '')
      }

      return await LoanBook.create({
        userId: user.id,
        bookId: book.id,
        closing_date: moment(closing_date, 'DD/MM/YYYY').toDate(),
      })
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
