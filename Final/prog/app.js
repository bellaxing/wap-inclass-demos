const express = require('express');
const app = express();

app.use(express.json());

//place your code here

// 1. require router
const bookRouter = require('./routes/bookRouter');
// 2. use router

app.use(bookRouter);








app.listen(3000);