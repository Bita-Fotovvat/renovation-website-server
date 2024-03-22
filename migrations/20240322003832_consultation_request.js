exports.up = function(knex) {
    return knex.schema.createTable('consultation_request', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('message').notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
      })
    };
exports.down = function(knex) {
    return knex.schema.dropTable('consultation_request');
  };