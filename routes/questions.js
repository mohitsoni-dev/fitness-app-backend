const express = require('express')
const router = express.Router()
const Question = require('../models/Question')

router.get('/', async (req, res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post('/', async (req, res) => {
    const question = new Question({
        question: req.body.question,
        desc: req.body.desc,
        date: Date.now(),
        isPrivate: req.body.isPrivate,
        author: req.body.isPrivate ? "Anon" : req.body.author,
        topic: req.body.topic,
        isAnswered: false,
        answer: {
            expertAns: '',
            answer: []
        }
    })
    try {
        const savedQuestion = await question.save()
        res.json(savedQuestion)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router