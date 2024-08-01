const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minlength: 5
    },
    vehicles: [Vehicle.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

