const express = require('express');
const path = require('path');

const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');

const app = express();

//4. middleware
// http://localhost:3000/public/abc/main.css
//express-demo4/resources/css/main.css

app.use('/public/abc', express.static(path.join(__dirname, 'public', 'resources', 'css')));

app.use(express.urlencoded());
//http://localhost:3000/product/add
app.use('/product', productRouter);
app.use(userRouter);



app.use('/math', (req, res, next) => {
    throw new Error('Whoops!');
})

app.use((req, res, next) => {
    res.status(404).send('404 NOT FOUND!, Try other way');
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});


app.listen(3000);