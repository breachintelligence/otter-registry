export function up(schema) {
  return schema.createTable('users', table => {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('users');
}
