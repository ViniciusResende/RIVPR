
exports.up = function(knex) {
  return knex.schema.createTable('types', function (table){
    table.increments();
    table.string('descricao').notNullable(); 
    table.string('icone').notNullable();   
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('types');
};
