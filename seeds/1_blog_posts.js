const posts = [
        {
          id: 0,
          timestamp: '2012-02-18 14:28:32',
          title: "I ate the berries",
          content: "berries are so good and yummy and I like them because I am a deer"
        },
        {
          id: 1,
          timestamp: '2012-02-20 16:28:32',
          title: "There is a bear named Rodzher in the forest",
          content: "watch out cause if he catches you he will make you listen to all of his puns and also he likes venison"
        },
        {
          id: 2,
          timestamp: '2014-02-25 12:28:32',
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
