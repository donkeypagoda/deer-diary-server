const express = require('express')
const knex = require('knex')

const router = express.Router()

router.get("/blog_posts", (req, res) => {
  knex("blog_posts")
  .then((posts) => {
      console.log("hayo")
      res.send(posts)
    })
})

module.exports = router
