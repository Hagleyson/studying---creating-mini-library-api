import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ForgotDTO } from 'App/Dtos'

export type TSessionDTO = {
  ctx: HttpContextContract
  body: ForgotDTO
}
