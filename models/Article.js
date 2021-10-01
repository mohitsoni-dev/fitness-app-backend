const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    title: String,
    body: String,
    date: String,
    author: String,
    image: String,
    source: String
})

module.exports = mongoose.model('Articles', ArticleSchema)
