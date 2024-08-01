const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const vehicleSchema = new Schema({
    year: {
        type: String,
        required: true,
        trim: true
    },
     make: {
        type: String,
        require: true,
        unique: true
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
   
    vin: {
        type: String, 
        required: true,
        unique: true,
        minlength: 17
    },
    license: {
        type: String,
        required: true
    },
    color: {
        type: String,
        trim: true
    },
    miles: {
        type: String,
        required: true
    },
    production: {
        type: Date,
        required: true
    },
    lastService: {
        type: Date,
        required: true
    },
    previousCustomer: {
        type: Boolean
    },   

})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;