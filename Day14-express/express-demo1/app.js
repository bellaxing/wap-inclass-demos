const express = require('express');

// 2. instantiation
const app = express();


// 3. configuration
// app.set('case sensitive routing', true);
app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);
console.log(app.get('port'));
console.log(process.env.NODE_ENV);

// 4. middlewares

// if we don't provide a path, it matches all URLS.
// app.use path-> /product -> /product/*
app.use('/product', (req, res, next) => {
    console.log('inside /product....');
    res.write('hello');
    res.write('world');
    // res.send();
    next(); //delegate to next available middleware
});

app.use('/user', (req, res, next) => {
    console.log('inside /user....');
    res.send('User');
});

app.use(function(req, res, next) {
    console.log('1......');
    res.end('Hi!!!');
});



// 7. bootup
app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));