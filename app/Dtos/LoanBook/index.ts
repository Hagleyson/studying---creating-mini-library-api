export interface CreateLoanBookDTO {
  userSecureId: string
  bookSecureId: string
  closingDate: string
}

export interface UpdateLoanBookDTO {
  status: 'active' | 'inactive'
  closingDate: string
}
