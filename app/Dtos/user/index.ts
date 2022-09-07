export interface UserDTO {
  name: string
  last_name: string
  sexo: string
  password: string
  birth_date: Date
  type: 'admin' | 'user'
  email: string
  cpf: string
}
