import { ListAllUserRepository } from './../Repositories/index'
export class ListAllUsersServices {
  public async execute(options: any) {
    return new ListAllUserRepository().handle(options)
  }
}
