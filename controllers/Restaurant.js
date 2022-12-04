const express = require('express')
const Restaurant = require('../models/Restaurant')
const router = express.Router()

// full CRUD 
// get all restaurants
router.get('/', async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find({})
        res.json(restaurants)
    } catch(err) {
        next(err)
    }
})
// get restaurant by name

router.get('/:name', async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findOne({ name: { '$regex': req.params.name, $options: 'i' } })
        res.json(restaurant)
    } catch(err) {
        next(err)
    }
})
// post to make a new restaurant

router.post('/', async (req, res, next) => {
    try {
         const newRestaurant = await Restaurant.create(req.body)
        res.status(201).json(newRestaurant)
    } catch(err) {
        next(err)
    }
   
})
// put to make edits to a restaurant 

router.put('/:name', async (req, res, next) => {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { name: { '$regex': req.params.name, $options: 'i' }},
            { $set: req.body},
            { new: true}
            
        )
            res.status(201).json(updatedRestaurant)
         
    } catch(err) {
        next(err)
    }
})
// delete restaurants

router.delete('/delete/:name', async (req, res, next) => {
    try {
        const deleteRestaurant = await Restaurant.deleteOne({ name: { '$regex': req.params.name, $options: 'i' } })
            if(deleteRestaurant) {
                res.sendStatus(204)
            } else {
                res.sendStatus(404)
            }
        
    } catch(err) {
        next(err)
    }
})
module.exports = router