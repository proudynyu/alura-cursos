import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('attendance', (table) => {
    table.increments('id').primary(),
    table.string('client', 50).notNullable(),
    table.string('pet', 20).notNullable(),
    table.string('service', 20).notNullable(),
    table.string('status', 20).notNullable(),
    table.text('observations')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('name')
}