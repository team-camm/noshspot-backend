const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    restaurantName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    hours: { type: String, required: true },
    yelpUrl: { type: String, required: true },
    website: { type: String, required: true },
    facebook: { type: String, required: true },
    menu: [{ 
        name:  {type: String, required: false },
        price:  {type: String, required: false },
        }],
    restaurantDesc: { type: String, required: true },
    paymentAddress: { type: String, required: true },
    annualRevenue: { type: String, required: true },
    image: { type: String, required: false },
    tags:  [{ type: String, required: false }],
    lat: { type: String, required: true},
    lng: { type: String, required: true},
  })
    module.exports = mongoose.model('Restaurant', RestaurantSchema);