const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/book', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).send('Booking saved successfully');
    } catch (error) {
        res.status(500).send('Error saving booking');
    }
});

module.exports = router;
