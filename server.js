const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))

// mongoose.connect('mongodb://localhost:27017/projectdb', ()=> console.log(`Connected to database.`))
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use('/users', require('./routes/usersRouter'))
app.use('/wordlist', require('./routes/wordListRouter'))
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(7001, ()=> console.log(`Server up on port 7001`))