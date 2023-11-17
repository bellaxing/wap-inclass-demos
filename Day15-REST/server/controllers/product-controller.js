const Product = require('../models/products');

exports.getAllProduct = (req, res, next) => { 
    res.json(Product.getAllProducts());
}


exports.getProductById = (req, res) => {
    res.json(Product.getProductById(req.params.id));
}


exports.saveProduct = (req, res) => {
    console.log(req.body);
    const {title, description, price} = req.body;
    new Product(null, title, description, price).save();
    res.status(201).end();
}

