import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ForgotDTO, ResetPasswordDTO } from 'App/Dtos'

export type TForgotPassword = {
  ctx: HttpContextContract
  body: ForgotDTO
}

export type TRecoveryPassword = {
  ctx: HttpContextContract
  body: ResetPasswordDTO
}
