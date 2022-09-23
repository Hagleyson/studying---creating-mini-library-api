import { DeleteBookRepository } from '../Repositories/index'
import { TDeleteBook } from '../type'

export class DeleteBookService {
  public async execute(options: TDeleteBook) {
    return new DeleteBookRepository().handle(options)
  }
}
