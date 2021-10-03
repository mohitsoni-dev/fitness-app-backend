const express = require('express');
const router = express.Router()
const Question = require('../models/Question')

// Get all questions

router.get('/', async (req, res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    } catch (error) {
        res.json({ message: error })
    }
})

// Get either answered or unanswered questions

router.get('/:answered', async (req, res) => {
    try {
        const questions = await Question.find({
            isAnswered: req.params.answered
        })
        res.json(questions)
    } catch (error) {

    }
})

// Post a new question

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

// Answer a question

router.patch('/', async (req, res) => {
    const answer = req.body.answer;
    const id = req.body.id;
    try {
        const updatedQuestion = await Question.updateOne({
            _id: id,
            isAnswered: true,
            answer: {
                expertAns: answer
            }
        })
        res.json(updatedQuestion)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router