const express = require('express')
const knex = require('../knex')

const router = express.Router()

router.get("/blog_posts", (req, res) => {
  knex('blog_posts').then((posts) => {
      res.send({posts})
      console.log(posts)
    })
})

router.post("/blog_posts", (req, res) => {
  const post = {
                timestamp: req.body.timestamp,
                title: req.body.title,
                content: req.body.content
              }
  knex('blog_posts')
    .insert(post)
      .then(result => {
        return res.send(result)
      })
})

// router.post('/scores/quest', authorize, (req, res, next) => {
//   const toInsert = {'map_id':3, 'score':req.body.score, 'user_id':req.claim.userId, 'quest':true}
//   knex('scores').insert(toInsert, '*')
//     .then((result) => {
//       return res.send(result);
//     })
//     .catch((err) => {
//       return next(err)
//     })
// })

module.exports = router
