// show history of high scores perhaps
// Seperate schema allows flexibility

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
    score: {
        type: Number,
        required: true
    },
    user: {
        // referencing user 
    }
})

module.exports= mongoose.model('Score', ScoreSchema)

