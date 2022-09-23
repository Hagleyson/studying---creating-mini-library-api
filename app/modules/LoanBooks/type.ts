import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateLoanBookDTO, ListBooksDTO, UpdateLoanBookDTO } from 'App/Dtos'

export type TCreateLoanBook = {
  ctx: HttpContextContract
  body: CreateLoanBookDTO
}

export type TUpdateLoanBook = {
  ctx: HttpContextContract
  body: UpdateLoanBookDTO
}
export type TListAllLoanBooksByPerson = {
  noPaginate?: boolean
  page: number
  perPage: number
  userSecureId: string
} & ListBooksDTO

export type TListAllLoanBooksByBook = {
  noPaginate?: boolean
  page: number
  perPage: number
  personSecureId: string
} & ListBooksDTO
