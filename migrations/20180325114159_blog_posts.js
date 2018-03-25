
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_posts', table => {
    table.increments();
    table.string("timestamp") //this is probably bad form and the timestamp should happen here in the server, but I'm adding the server
                              // to what's already built
    table.string('title')
    table.string('content')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_posts')
};
