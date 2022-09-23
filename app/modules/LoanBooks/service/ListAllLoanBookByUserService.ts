import { ListAllLoanBookByUserRepository } from '../Repositories/index'

import { TListAllLoanBooksByPerson } from '../type'

export class ListAllLoanBookByUserService {
  public async execute(options: TListAllLoanBooksByPerson) {
    return new ListAllLoanBookByUserRepository().handle(options)
  }
}
