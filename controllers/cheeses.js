const cheeseRouter = require('express').Router()
const Cheese = require('../models/cheese')

// Index Route
cheeseRouter.get('/cheese', async (req,res) => {
    const cheeses = await Cheese.find({})
    res.json(cheeses)
})

// Create Route
cheeseRouter.post('/cheese', async(req,res) => {
    const cheese = await Cheese.create(req.body)
    res.json(cheese)
})

// Delete Route
cheeseRouter.delete('/cheese/:id', async (req,res) => {
    try{
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// Update Route
cheeseRouter.put('/cheese/:id', async(req,res) => {
    const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(cheese)
})

module.exports = cheeseRouter