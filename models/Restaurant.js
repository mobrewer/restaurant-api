const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    descripton: String,
    cuisine: String,
    veganOptions: Boolean,
    takeOut: Boolean,
    priceRange: {
        type: Number,
        min: 1,
        max: 4,
    },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant