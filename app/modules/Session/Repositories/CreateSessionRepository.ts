import { Exception } from '@adonisjs/core/build/standalone'
import { TSessionDTO } from '../type'

export class CreateSessionRepository {
  public async handle({ ctx, body }: TSessionDTO) {
    const { email, password } = body
    try {
      return await ctx.auth.use('api').attempt(email, password, { expiresIn: '2hours' })
    } catch (error) {
      console.log(error.sqlMessage)
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
