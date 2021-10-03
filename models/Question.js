const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    question: String,
    desc: String,
    date: Date,
    isPrivate: Boolean,
    author: String,
    topic: String,
    isAnswered: Boolean,
    answer: {
        expertAns: String,
        answers: [String]
    }
})

module.exports = mongoose.model('Questions', QuestionSchema)
