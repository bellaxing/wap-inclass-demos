const express = require('express');
const urlencoded = require('./my-body-parser');
const path = require('path');

// 2. instantiation
const app = express();


// 3. configuration
// app.set('case sensitive routing', true);
app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);

// app.use(urlencoded);
app.use(express.urlencoded());

// 4. middlewares
app.get('/add-product', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'add-product.html'));
})

// /product/*
app.all('/product', (req, res, next) => {
    console.log(req.body);
    res.send('Save successfully');
});





// 7. bootup
app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));