const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/user', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

router.post('/user', (req, res) => {
    res.send(`${req.body.firstname}, ${req.body.lastname}`);
});




module.exports = router;