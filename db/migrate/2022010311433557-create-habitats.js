export function up(schema) {
  return schema.createTable('habitats', table => {
    table.increments('id');
    table.string('name');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('htype');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('habitats');
}
