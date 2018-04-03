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
  console.log(req.body)
  const post = {
                title: req.body.title,
                content: req.body.content
              }
  knex('blog_posts')
    .insert(post, '*')
      .then(result => {
        console.log(result)
        res.send(result)
      })
})

router.delete("/blog_posts", (req, res) => {
  console.log(req.body)
  const id = req.body.id
  knex('blog_posts')
  .where("id", id)
  .del()
})

module.exports = router
