import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('last_name').notNullable()
      table.string('sexo').notNullable()
      table.string('password').notNullable()
      table.date('birth_date').notNullable()
      table.string('email').notNullable()
      table.string('type').notNullable()
      table.string('cpf').unique().notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
