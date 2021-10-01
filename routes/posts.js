const express = require('express')
const router = express.Router()
const Article = require('../models/Article')

router.get('/', async (req, res) => {
    try {
        const articles = await Article.find()
        res.json(articles)
    } catch (error) {
        res.json({message: error})
    }
})

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        date: req.body.date,
        author: req.body.author,
        image: req.body.image,
        source: req.body.source
    })
    try {
        const savedArticle = await article.save()
        res.json(savedArticle)
    } catch (error) {
        res.json({message: error})
    }
    
})

module.exports = router
