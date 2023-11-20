const express = require('express');
const router = express.Router();

// place your code here
const bookController = require('../controllers/bookController');


router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.save);
router.get('/books', bookController.search);


module.exports = router;