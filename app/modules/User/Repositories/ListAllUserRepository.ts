import User from 'App/Models/User'

export class ListAllUserRepository {
  public async handle(options: any) {
    const users = await User.query().select('name', 'last_name', 'email', 'sexo', 'type')
    return { users }
  }
}
