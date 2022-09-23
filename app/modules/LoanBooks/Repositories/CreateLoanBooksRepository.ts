import User from 'App/Models/User'
import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Book from 'App/Models/Book'
import { TCreateLoanBook } from '../type'
import moment from 'moment'
import LoanBook from 'App/Models/LoanBook'

export class CreateLoanBooksRepository {
  public async handle({ ctx, body }: TCreateLoanBook) {
    const { bookSecureId, userSecureId, closingDate } = body
    try {
      const book = await Book.findBy('secure_id', bookSecureId)
      if (!book) {
        throw new NotFoundException('There is no book for this secure id', 404, 'E_NOT_FOUND')
      }

      const user = await User.findBy('secure_id', userSecureId)
      if (!user) {
        throw new NotFoundException('There is no user for this secure id', 404, 'E_NOT_FOUND')
      }
      await ctx.bouncer.authorize('loanBooks', user)
      const isBorrowedBook = await LoanBook.query()
        .where('book_id', book.id)
        .andWhere('status', 'active')

      if (isBorrowedBook.length > 0) {
        throw new NotFoundException('This book is currently on loan', 410, '')
      }

      return await LoanBook.create({
        userId: user.id,
        bookId: book.id,
        closing_date: moment(closingDate, 'DD/MM/YYYY').toDate(),
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
