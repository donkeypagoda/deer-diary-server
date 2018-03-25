const express = require('express')
const knex = require('knex')

const router = express.Router()

router.get("/blog_posts", (req, res, next) => {
  knex("deerdiary_dev").select().table('blog_posts')
  .then(posts => {
      res.send(posts)
    })
    .catch(err => next(err))
})

module.exports = router
