import { CreateLoanBookDTO } from './../../Dtos/LoanBook/index'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateLoanBooksService } from 'App/modules/LoanBooks/service'

export default class LoanBooksController {
  public async store(ctx: HttpContextContract) {
    const body = ctx.request.body() as CreateLoanBookDTO
    return new CreateLoanBooksService().execute({
      ctx,
      body,
    })
  }
}
