import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { SessionDTO } from 'App/Dtos'

export type TSessionDTO = {
  ctx: HttpContextContract
  body: SessionDTO
}
