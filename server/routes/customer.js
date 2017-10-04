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

router.post('/new', (req, res) => {
    
    Customer
        .create(req.body)
        .then(customer => {
            res.status(200).json(customer);
        });
});

router.post('/fakedata', (req, res) => {
    var customers = [
        {
            fullName: "Cameron Wilby",
            email: "memelord@origin.com",
            password: "ilovememes",
            address: "101 W Broadway",
            phone: "555-555-5555"
        },
        {
            fullName: "Michael Roberts",
            email: "mike@origin.com",
            password: "roberts",
            address: "101 W Broadway",
            phone: "555-555-5555"
        },
        {
            fullName: "Gus Suarez",
            email: "gus@origin.com",
            password: "suarez",
            address: "101 W Broadway",
            phone: "555-555-5555"
        }
    ]
    customers.forEach( customer => {
        Customer
        .create(customer);
    })
    res.status(200).json(customers);
   
});

module.exports = router;