const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wordListSchema = new Schema({
    wordArray: {
        type: Array,
        required: true
    }
})

module.exports= mongoose.model('wordList', wordListSchema)