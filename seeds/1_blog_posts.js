const posts = [
        {
          title: "I ate the berries",
          content: "berries are so good and yummy and I like them because I am a deer"
        },
        {
          title: "There is a bear named Rodzher in the forest",
          content: "watch out cause if he catches you he will make you listen to all of his puns and also he likes venison"
        },
        {
          title: "Do deer like tacos?",
          content: "of course they do, everyone loves tacos what a silly question, what are you a bear???"
        }
      ]


exports.seed = function(knex, Promise) {
  return knex('blog_posts').del()
  .then(() => {
    return knex('blog_posts').insert(posts);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('blog_posts_id_seq', (SELECT MAX(id) FROM blog_posts));"
    );
  });
};
