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

router.get('/:id', (req, res) => {
    
    Customer
        .findById(req.params.id)
        .then(customer => {
            if (customer) {
                res.status(200).json(customer);
            } else {
                res.status(404).send('User not found!!')
            }
        });
});



router.put('/:id', (req,res) => {
    // console.log(req.body)
    Customer.findByIdAndUpdate(req.params.id, { $set: req.body },  (err) => {
      if (err) return console.log(err);
    })
    Customer.findById(req.params.id)
    .then(cust => {
      res.status(204).json(cust);
    });
  });

router.post('/new', (req, res) => {
    
    Customer
        .create(req.body)
        .then(customer => {
            res.status(200).json(customer);
        });
});

router.delete('/:id', (req,res) => {
    Customer.findByIdAndRemove(req.params.id, (err) => {
      if (err) return handleError(err);
    });
    res.status(200).send('deleted');
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
