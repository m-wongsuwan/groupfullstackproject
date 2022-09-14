const mongoose = require('mongoose')
const Schema = mongoose.Schema

const renameItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('renameItem', renameItemSchema)