import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateLoanBookDTO } from 'App/Dtos'

export type TCreateLoanBook = {
  ctx: HttpContextContract
  body: CreateLoanBookDTO
}
