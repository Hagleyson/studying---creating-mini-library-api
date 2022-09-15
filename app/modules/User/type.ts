import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserDTO } from 'App/Dtos'

export type TUser = {
  ctx: HttpContextContract
  body: UserDTO
}
export type TDeleteUser = {
  secureId: string
}
