import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BookDTO } from 'App/Dtos'

export type TCreateAndUpdateBook = {
  ctx: HttpContextContract
  body: BookDTO
}

export type TDeleteBook = {
  ctx: HttpContextContract

  secureId: string
}
export type TListAllBooks = {
  noPaginate?: boolean
  page: number
  perPage: number
} & BookDTO
