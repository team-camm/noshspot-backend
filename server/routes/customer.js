const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
router.get('/', (req, res) => {
    
    Customer
        .find()
        .then(customer => {
            res.status(200).json(customer);
        });
});

module.exports = router;