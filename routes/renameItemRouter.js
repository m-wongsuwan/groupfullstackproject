const express = require('express')
const renameItemRouter = express.Router()
const renameItem = require('../models/renameItem')

renameItemRouter.get('/', (req, res, next) => {
    renameItem.find((err, items)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

renameItemRouter.get('/:itemId', (req, res, next) =>{
    renameItem.findOne(
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

renameItemRouter.post('/', (req, res, next) =>{
    const newItem = new renameItem(req.body)
    newItem.save((err, updatedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})

renameItemRouter.delete('/:itemId', (req, res, next) =>{
    renameItem.findOneAndDelete(
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

renameItemRouter.put('/:itemId', (req, res, next) =>{
    renameItem.findOneAndUpdate(
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

module.exports = renameItemRouter