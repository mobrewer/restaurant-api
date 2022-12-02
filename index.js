const express = require('express')

const bodyParser = require('body-parser')

const app = express()


const restaurantController = require('./controllers/Restaurant')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/api/restaurants/', restaurantController)

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(4000, () => console.log('Server running on port 4000!'))