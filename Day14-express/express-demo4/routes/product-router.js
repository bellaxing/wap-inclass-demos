const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/save', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});

router.delete('/delete', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});


router.put('/edit', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});

module.exports = router;