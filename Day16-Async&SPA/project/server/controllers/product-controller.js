const Product = require('../models/products');

exports.getAllProduct = (req, res, next) => { 
    res.json(Product.getAllProducts());
}


exports.getProductById = (req, res) => {
    res.json(Product.getProductById(req.params.id));
}


exports.saveProduct = (req, res) => {
    const {title, description, price} = req.body;
    res.status(201).json(new Product(null, title, description, price).save());
}

exports.updateProduct = (req, res) => {
    const {title, description, price} = req.body;
    const prod = new Product(null, title, description, price);
    prod.id = req.params.id;
    prod.updateById(req.params.id);
    res.status(200).json(prod);
}

exports.deleteById = (req, res, next) => {
    Product.deleteById(req.params.id);
    res.status(200).end();
}