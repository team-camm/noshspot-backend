const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Customer = require('../models/Customer');

router.get('/', (req, res) => {
    
    Restaurant
        .find()
        .then(restaurants => {
            res.status(200).json(restaurants);
        });
});

router.get('/:id', (req, res) => {
    
    Restaurant
        .findById(req.params.id)
        .then(restaurant => {
            if (restaurant) {
                res.status(200).json(restaurant);
            } else {
                res.status(404).send('No restaurant found!')
            }
        });
});

router.put('/:id', (req,res) => {
    // console.log(req.body)
    Restaurant.findByIdAndUpdate(req.params.id, { $set: req.body },  (err) => {
      if (err) return console.log(err);
    })
    Restaurant.findById(req.params.id)
    .then(rest => {
      res.status(204).json(rest);
    });
  });

router.get('/nearby', (req, res) => {
    
    Restaurant
        .find()
        .where('').lt('').exec(err => console.log(err))
        .then(restaurant => {
            res.status(200).json(restaurant);
        });
});

router.post('/new', (req, res) => {
    
    Restaurant
        .create(req.body)
        .then(restaurant => {
            res.status(200).json(restaurant);
        });
});

router.delete('/:id', (req,res) => {
    Restaurant.findByIdAndRemove(req.params.id, (err) => {
      if (err) return handleError(err);
    });
    res.status(200).send('deleted');
});

router.post('/fakedata', (req, res) => {
    var restaurants = [
        {
            restaurantName: "Chili's",
            email: "chilis@chilis.com",
            password: "chilis",
            address: "3665 North Harbor Drive, Main Terminal, San Diego, CA 92101",
            phone: "555-555-5555",
            yelpUrl: "yelp.chilis.com",
            website: "chilis.com",
            hours: "9AM-9PM",
            facebook: "facebook.com/chilis",
            restaurantDesc: "American food, served in an uninviting atmosphere.",
            paymentAddress: "123 Main St",
            annualRevenue: "1,000,000",
            image: "chilis.jpg",
            tags: ['American', 'Burger', 'Chili', 'Cheese'],
            lat: "32.7154792",
            lng: "-117.16363130000002"
        },
        {
            restaurantName: "Chipotle",
            email: "notreal@mexican.food",
            password: "queso",
            address: "101 W Broadway, San Diego, CA 92101",
            phone: "645-373-9099",
            hours: "12AM-12AM",
            yelpUrl: "yelp/chiptole.com",
            website: "chiptole.com",
            facebook: "facebook.com/chiptole",
            restaurantDesc: "The Subway of burritos.",
            paymentAddress: "123 Calle de Origin",
            annualRevenue: "99,999,999",
            image: "burrito.jpg",
            tags: ["Mexican", "Tacos", "Burritos", "Queso"],
            lat: "32.7150214",
            lng: "-117.16429579999999"
           },
           {
            restaurantName: "Chipotle",
            email: "notreal@mexican.food",
            password: "queso",
            address: "307 N Sepulveda Blvd, El Segundo, CA 90245",
            phone: "645-373-9099",
            hours: "12AM-12AM",
            yelpUrl: "yelp/chiptole.com",
            website: "chiptole.com",
            facebook: "facebook.com/chiptole",
            restaurantDesc: "The Subway of burritos.",
            paymentAddress: "123 Calle de Origin",
            annualRevenue: "99,999,999",
            image: "burrito.jpg",
            tags: ["Mexican", "Tacos", "Burritos", "Queso"],
            lat: "33.9196736",
            lng: "-118.39648460000001"
           }
    ]
    restaurants.forEach( rest => {
        Restaurant
        .create(rest);
    })
    res.status(200).json(restaurants);
   
});

module.exports = router;