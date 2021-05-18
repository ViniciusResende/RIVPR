
exports.up = function(knex) {
  return knex.schema.createTable('report_has_status', function (table){
    table.increments();
    
    table.timestamp('datahoraCadastro').notNullable().defaultTo(knex.fn.now());
    //relacionamento
    table.string('status_id').notNullable();

    table.foreign('status_id').references('id').inTable('status');

    table.string('report_id').notNullable();

    table.foreign('report_id').references('id').inTable('reports');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('report_has_status');
};
