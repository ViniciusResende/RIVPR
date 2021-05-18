
exports.up = function(knex) {
  return knex.schema.createTable('reports', function (table){
    table.increments();

    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.text('descricao').notNullable();
    table.string('foto').notNullable();//Mudar tipo para foto
    table.timestamp('datahoraCadastro').notNullable().defaultTo(knex.fn.now());
    //relacionamento
    table.integer('status').notNullable();

    table.foreign('status').references('status_id').inTable('report_has_status')

    table.integer('tipo').notNullable();
    
    table.foreign('tipo').references('id').inTable('types');
    
    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('reports');
};
