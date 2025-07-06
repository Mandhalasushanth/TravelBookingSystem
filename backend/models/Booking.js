const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    from: String,
    to: String,
    date: String
});

module.exports = mongoose.model('Booking', bookingSchema);
