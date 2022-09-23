import { CreateLoanBookDTO, UpdateLoanBookDTO } from './../../Dtos/LoanBook/index'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  CreateLoanBooksService,
  UpdateLoanBooksService,
  ListAllLoanBookByUserService,
} from 'App/modules/LoanBooks/service'

export default class LoanBooksController {
  public async store(ctx: HttpContextContract) {
    const body = ctx.request.body() as CreateLoanBookDTO
    return new CreateLoanBooksService().execute({
      ctx,
      body,
    })
  }
  public async update(ctx: HttpContextContract) {
    const body = ctx.request.body() as UpdateLoanBookDTO
    return new UpdateLoanBooksService().execute({ ctx, body })
  }
  public async ListAllByUser(ctx: HttpContextContract) {
    const { noPaginate, page, perPage, userSecureId, status, closingDate, bookName } =
      ctx.request.qs()
    return new ListAllLoanBookByUserService().execute({
      noPaginate,
      page,
      perPage,
      userSecureId,
      status,
      closingDate,
      bookName,
    })
  }
}
