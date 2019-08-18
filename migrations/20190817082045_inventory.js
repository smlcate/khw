
exports.up = function(knex) {
  return knex.schema.createTable('inventory', function(table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('stock');
    table.text('images');
    table.string('room');
    table.string('category');
    table.string('set');
    table.text('tags');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('inventory');
};
