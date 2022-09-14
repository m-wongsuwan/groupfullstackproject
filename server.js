const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/projectdb', ()=> console.log(`Connected to database.`))

app.use('/renameitem', require('./routes/renameItemRouter'))
app.use('/wordlist', require('./routes/wordListRouter'))

app.listen(7000, ()=> console.log(`Server up on port 7000`))