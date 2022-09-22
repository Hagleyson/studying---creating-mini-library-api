import { DeleteBookRepository } from '../Repositories/index'
import { TDeleteBook } from '../type'

export class DeleteBookService {
  public async execute({ secureId }: TDeleteBook) {
    return new DeleteBookRepository().handle({ secureId })
  }
}
