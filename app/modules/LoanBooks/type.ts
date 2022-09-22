import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateLoanBookDTO, UpdateLoanBookDTO } from 'App/Dtos'

export type TCreateLoanBook = {
  ctx: HttpContextContract
  body: CreateLoanBookDTO
}

export type TUpdateLoanBook = {
  ctx: HttpContextContract
  body: UpdateLoanBookDTO
}
