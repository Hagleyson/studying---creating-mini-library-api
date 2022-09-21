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
  public status: 'active' | 'inactive'

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

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
