import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BookDTO } from 'App/Dtos'

export type TCreateAndUpdateBook = {
  ctx: HttpContextContract
  body: BookDTO
}
