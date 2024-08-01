const db = require('./connection');
const { User, Appointment, Vehicle } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Appointment', 'appointments');
  await cleanDB('User', 'users');

  const appointment = await Appointment.insertMany([
    {
        date: 9/30/2025,
        description: "Oil Change Tire Rotation",
        users: [user._id]
    },
    {
        date: 10/21/25,
        description: "Safety Inspection",
        users: [user._id]
    }
  ]);

  console.log(' *** Appointments Seeded ***')

  const vehicles = await Vehicle.insertMany([
    {
    year: "2020",
    make: "Subaru",
    model: "WRX STi",
    vin: "12345678912345678",
    license: "1234567",
    color: "RallyCross Blue",
    miles: "26,034",
    production: 12/1/2020,
    lastService: 6/20/2024,
    previousCustomer: true
    },
    {
    year: "2021",
    make: "Toyota",
    model: "Tacoma",
    vin: "12345678912345658",
    license: "1233567",
    color: "RallyCross Blue",
    miles: "26,034",
    production: 12/1/2020,
    lastService: 6/20/2024,
    previousCustomer: true
    }
  ])
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    vehicles: [vehicle._id]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    vehicles: [vehicle._id]
  });

  console.log('users seeded');

  process.exit();
});