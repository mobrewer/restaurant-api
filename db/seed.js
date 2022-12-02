const Restaurant = require('../models/Restaurant')
const restaurantData = require('./restaurants.json')

Restaurant.deleteMany({}).then(() => {
    Restaurant.create(restaurantData).then(restaurants => {
        console.log(restaurants)
        process.exit()
    })
})


Restaurant.deleteMany()

  .then(() => Restaurant.insertMany(restaurantData))

  .then(console.log)
  .catch(console.error)
  .finally(process.exit);

