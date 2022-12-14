const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const restaurantController = require('./controllers/Restaurant')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/restaurants/', restaurantController)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8080, () => console.log('Server running on port 8080!'))