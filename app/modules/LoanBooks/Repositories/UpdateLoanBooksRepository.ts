import LoanBook from 'App/Models/LoanBook'

import { Exception } from '@adonisjs/core/build/standalone'

import { TUpdateLoanBook } from '../type'
import NotFoundException from 'App/Exceptions/NotFoundException'
import moment from 'moment'

export class UpdateLoanBooksRepository {
  public async handle({ ctx, body }: TUpdateLoanBook) {
    const secureId = ctx.request.param('secureId')
    const { status, closingDate } = body
    try {
      const loanBook = await LoanBook.query().where('secure_id', secureId).preload('user').first()
      if (!loanBook) {
        throw new NotFoundException('There is no loanBook for this secure id', 404, 'E_NOT_FOUND')
      }
      let loanRenewal = loanBook.numberRenewals
      await ctx.bouncer.authorize('loanBooks', loanBook.user)

      if (moment(loanBook.closing_date).format('DD/MM/YYYY') !== closingDate) {
        loanRenewal += 1
      }

      loanBook.merge({
        status: status ? status : loanBook.status,
        closing_date: closingDate
          ? moment(closingDate, 'DD/MM/YYYY').toDate()
          : loanBook.closing_date,
        numberRenewals: loanRenewal,
      })

      loanBook.save()
      return loanBook
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
