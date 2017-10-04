const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Customer = require('../models/Customer');
router.get('/', (req, res) => {
    
    Restaurant
        .find()
        .then(restaurant => {
            res.status(200).json(resturant);
        });
});
module.exports = router;