
exports.up = function(knex) {
  return knex.schema.createTable('confirmaStatus', function (table){
    table.increments();

    table.boolean('confirma').notNullable();
    table.integer('novoStatus').notNullable();
    table.timestamp('datahoraCadastro').notNullable().defaultTo(knex.fn.now());
    //relacionamento
    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');

    table.string('report_id').notNullable();

    table.foreign('report_id').references('id').inTable('reports');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('confirmaStatus');
};
