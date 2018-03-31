
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_posts', table => {
    table.increments()
    table.timestamps(true, true)
    table.string('title')
    table.string('content')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_posts')
};
