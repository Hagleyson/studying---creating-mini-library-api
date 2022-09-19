import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'book_reservations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.primary(['user_id', 'book_id'])
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table
        .integer('book_id')
        .unsigned()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE')
        .notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
