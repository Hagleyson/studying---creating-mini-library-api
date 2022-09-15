import { TDeleteUser } from '../type'
import { DeleteUserRepository } from './../Repositories/index'

export class DeleteUserService {
  public async execute({ secureId }: TDeleteUser) {
    return new DeleteUserRepository().handle({ secureId })
  }
}
