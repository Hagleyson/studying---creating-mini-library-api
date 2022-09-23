import { ListAllLoanBooksByBooksRepository } from '../Repositories/index'

import { TListAllLoanBooksByBook } from '../type'

export class ListAllLoanBookByBookService {
  public async execute(options: TListAllLoanBooksByBook) {
    return new ListAllLoanBooksByBooksRepository().handle(options)
  }
}
