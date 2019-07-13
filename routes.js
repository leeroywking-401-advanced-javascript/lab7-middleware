const express = require('express');

const router = express.Router();


const dmiddle = (req, res, next) => {
    throw error;
    next();
}

router.get('/c', (req, res) => {
    res.status(200).send('Route C');
});

router.get('/d', dmiddle, (req, res) => {
    res.status(200).send('Route D');
});


module.exports = router; 