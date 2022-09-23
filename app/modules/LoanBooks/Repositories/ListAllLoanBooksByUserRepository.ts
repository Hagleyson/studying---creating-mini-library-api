import LoanBook from 'App/Models/LoanBook'
import { Exception } from '@adonisjs/core/build/standalone'
import NotFoundException from 'App/Exceptions/NotFoundException'
import User from 'App/Models/User'

import { TListAllLoanBooksByPerson } from '../type'
import moment from 'moment'

export class ListAllLoanBookByUserRepository {
  public async handle({
    noPaginate,
    page,
    perPage,
    userSecureId,
    status,
    closingDate,
    bookName,
    ctx,
  }: TListAllLoanBooksByPerson) {
    try {
      const user = await User.findBy('secure_id', userSecureId)

      if (!user) {
        throw new NotFoundException('There is no user for this secure id', 404, 'E_NOT_FOUND')
      }
      if (noPaginate) {
        const count = await LoanBook.query().pojo<{ count: number }>().count('id as count')
        perPage = count[0].count
      }
      await ctx.bouncer.authorize('loanBooks', user)

      return await LoanBook.query()
        .preload('book')
        .where((query) => {
          if (status) {
            query.andWhere('status', status)
          }
          if (closingDate) {
            query.andWhere('closing_date', moment(closingDate, 'DD/MM/YYYY').toDate())
          }
        })
        .whereHas('user', (userFind) => {
          userFind.where('id', user.id)
        })
        .andWhereHas('book', (bookFind) => {
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
