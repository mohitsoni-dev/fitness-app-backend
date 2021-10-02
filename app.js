const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// Import Routes

const postRoutes = require('./routes/posts')

app.use(express.json())
app.use('/posts', postRoutes)

// ROUTES

app.get('/', (req, res) => {
    res.send("home")
})

// Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connected')
)

app.listen(process.env.PORT || 3000)