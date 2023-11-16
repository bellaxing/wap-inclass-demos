const express = require('express');


const app = express();


app.get('/user',(req, res, next)=> {
    console.log('1.....');
    next();
}, (req, res, next) => {
    console.log('2.....');
    next();
}, (req, res, next) => {
    console.log('3.....');
    next();
});

app.get('/user', (req, res, next) => {
    console.log('4...');
    res.send('user');
});


app.use((req, res, next) => {
    res.status(404).send('404!!!!!!!!');
})

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!!!!!!!!');
})


app.listen(3000);