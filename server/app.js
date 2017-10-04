const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const customerModel = require('./models/Customer.js');
const restaurantModel = require('./models/Restaurant.js');
const app = express();
mongoose.connect('mongodb://localhost/noshspot', { useMongoClient: true });
mongoose.Promise = Promise;
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello');
})
app.use('/api/customer', require('./routes/customer'));
app.use('/api/restaurant', require('./routes/restaurant'));
module.exports = app;