const express = require ('express')
const bodyParser = require ('body-parser')
const blogPosts = require('./routes/blogPosts')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(blogPosts)
// I dont' know what this is doing, I swiped it from roger's code to resolve CORS issues, but it didn't work
//app.use(cors())

//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const port = process.env.PORT || 5000


app.listen(port, () => {
  console.log('listening on ', port)
})
