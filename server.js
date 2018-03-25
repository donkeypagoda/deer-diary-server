const express = require ('express')
const bodyParser = require ('body-parser')
const blogPosts = require('./routes/blogPosts')

const app = express()
app.use(bodyParser.json())
app.use(blogPosts)


const port = process.env.PORT || 5000


app.listen(port, () => {
  console.log('listening on ', port)
})
