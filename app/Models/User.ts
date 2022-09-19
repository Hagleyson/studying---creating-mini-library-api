import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  beforeSave,
  beforeCreate,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuidV4 } from 'uuid'
import LinkToken from './LinkTokenUser'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string
  @column()
  public name: string

  @column()
  public user_name: string

  @column()
  public last_name: string

  @column()
  public sexo: string

  @column()
  public birth_date: Date

  @column()
  public email: string

  @column()
  public type: 'user' | 'admin'

  @column()
  public cpf: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => LinkToken, { foreignKey: 'userId' })
  public tokens: HasMany<typeof LinkToken>

  @beforeCreate()
  public static async CreateUUID(model: User): Promise<void> {
    model.secure_id = uuidV4()
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
