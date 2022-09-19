import { Exception } from '@adonisjs/core/build/standalone'
import { TForgotPassword } from '../type'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

import util from 'util'
import { randomBytes } from 'crypto'
import Mail from '@ioc:Adonis/Addons/Mail'
import NotFoundException from 'App/Exceptions/NotFoundException'
export class ForgotPasswordRepository {
  public async handle({ ctx, body }: TForgotPassword) {
    const { email, url } = body

    try {
      const user = await User.findBy('email', email)

      if (!user) {
        throw new NotFoundException('There is no user for this email', 404, 'E_NOT_FOUND')
      }
      const random = await util.promisify(randomBytes)(24)
      const token = random.toString('hex')
      await user.related('tokens').updateOrCreate({ userId: user.id }, { token })

      const resetPasswordUrlWithToken = `${url}?token=${token}`

      await Mail.send((message) => {
        message
          .from('Hagleyson fernandes leite')
          .to(email)
          .subject('Biblioteca: Recuperação de Senha.')
          .htmlView('email/forgotpassword', {
            productName: 'Biblioteca',
            name: user.name,
            resetPasswordUrl: resetPasswordUrlWithToken,
          })
      })

      return resetPasswordUrlWithToken
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      )
    }
  }
}
