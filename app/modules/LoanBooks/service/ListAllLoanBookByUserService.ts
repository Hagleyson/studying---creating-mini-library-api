import { ListAllLoanBookByUserRepository } from '../Repositories/ListAllLoanBooksByUserRepository'

import { TListAllLoanBooksByPerson } from '../type'

export class ListAllLoanBookByUserService {
  public async execute(options: TListAllLoanBooksByPerson) {
    return new ListAllLoanBookByUserRepository().handle(options)
  }
}
