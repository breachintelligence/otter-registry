export function up(schema) {
  return schema.createTable('otters', table => {
    table.increments('id');
    table.string('name');
    table.integer('age');
    table.integer('habitat_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('otters');
}
