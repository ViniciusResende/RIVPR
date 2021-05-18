
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
    table.string('email').notNullable();
    table.string('foto').notNullable(); //Mudar tipo para foto
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
