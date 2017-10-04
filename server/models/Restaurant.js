const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    restaurantName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    hours: { type: String, required: true },
    yelp_url: { type: String, required: true },
    website: { type: String, required: true },
    facebook: { type: String, required: true },
    menu: { 
        description: {type: String, required: true },
        name:  {type: String, required: true },
        price:  {type: String, required: true },
        },
    restaurant_desc: { type: String, required: true },
    payment_address: { type: String, required: true },
    annual_revenue: { type: String, required: true },
    image: { type: String, required: true },
    tags:  [{type: String, required: true }]
  })
    module.exports = mongoose.model('Restaurant', RestaurantSchema);