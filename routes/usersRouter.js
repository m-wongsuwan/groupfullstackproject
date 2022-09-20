const express = require('express')
const usersRouter = express.Router()
const user = require('../models/user')

usersRouter.get('/', (req, res, next) => {
    user.find((err, items)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

usersRouter.get('/:userId', (req, res, next) =>{
    user.findOne(
        { _id: req.params.userId },
        (err, item) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        }
    )  
})

usersRouter.post('/', (req, res, next) =>{
    const newItem = new user(req.body)
    newItem.save((err, updatedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})

usersRouter.delete('/:userId', (req, res, next) =>{
    user.findOneAndDelete(
        { _id: req.params.userId },
        (err, deletedItem) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully deleted ${deletedItem.name} from the database`)
        }
    )
})

usersRouter.put('/:userId', (req, res, next) =>{
    user.findOneAndUpdate(
        { _id: req.params.userId },
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

module.exports = usersRouter