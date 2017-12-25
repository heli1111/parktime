exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', (table) => {
    table.string('job_id').primary();
    table.string('title');
    table.text('description');
    table.decimal('rate');
    table.string('status');
    table.string('dog_id').unsigned().references('dog_id').inTable('dogs');
    table.string('walker_id').unsigned().references('walker_id').inTable('walkers');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};