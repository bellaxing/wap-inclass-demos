const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/product-router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);


app.use((err, req, res, next)=>{
    res.status(500).send(`Server Error ${err.message}`);
})

app.listen(3000, () => {
    console.log('listen on 3000');
})