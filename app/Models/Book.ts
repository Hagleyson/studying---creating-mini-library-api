import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidV4 } from 'uuid'

import LoanBook from './LoanBook'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  //

  @column()
  public name: string

  @column()
  public actor: string

  @column()
  public edition: string

  @column()
  public code: string

  @hasMany(() => LoanBook, { foreignKey: 'bookId' })
  public book: HasMany<typeof LoanBook>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async CreateUUID(model: Book): Promise<void> {
    model.secure_id = uuidV4()
  }
}
