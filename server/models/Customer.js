const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
    history: [{ type: String, required: true }]
  })
    module.exports = mongoose.model('Customer', CustomerSchema);