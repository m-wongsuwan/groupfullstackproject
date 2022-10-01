// User should only contain user specific information
// Models tightly coupled with relevant information

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    // move to highScore model
    // allows for ranking a person's score
    score: {
        type: Number,
        default: 0,
    }
})

module.exports= mongoose.model('User', UserSchema)