const express = require('express')
const wordListRouter = express.Router()
const wordList = require('../models/wordList')

wordListRouter.get('/', (req, res, next) => {
    wordList.find((err, items)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

wordListRouter.get('/:itemId', (req, res, next) =>{
    wordList.findOne(
        { _id: req.params.itemId },
        (err, item) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        }
    )  
})

wordListRouter.post('/', (req, res, next) =>{
    const newItem = new wordList(req.body)
    newItem.save((err, updatedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})

wordListRouter.delete('/:itemId', (req, res, next) =>{
    wordList.findOneAndDelete(
        { _id: req.params.itemId },
        (err, deletedItem) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully deleted ${deletedItem.name} from the database`)
        }
    )
})

wordListRouter.put('/:itemId', (req, res, next) =>{
    wordList.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = wordListRouter