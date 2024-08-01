const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    users: [User.schema]
})

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;