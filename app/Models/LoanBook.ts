import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidV4 } from 'uuid'
import User from './User'
import Book from './Book'

export default class LoanBook extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  @column()
  public closing_date: Date

  @column()
  public status: 'active' | 'inactive'

  @column({ columnName: 'user_id' })
  public userId: number

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column({ columnName: 'book_id' })
  public bookId: number

  @belongsTo(() => Book, { foreignKey: 'bookId' })
  public book: BelongsTo<typeof Book>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async CreateUUID(model: LoanBook): Promise<void> {
    model.secure_id = uuidV4()
  }
}
