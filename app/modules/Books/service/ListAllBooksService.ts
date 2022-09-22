import { ListAllBooksRepository } from '../Repositories/index'
import { TListAllBooks } from '../type'

export class ListAllBooksService {
  public async execute(options: TListAllBooks) {
    return new ListAllBooksRepository().handle(options)
  }
}
