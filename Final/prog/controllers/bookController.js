const Book = require('../models/book');

exports.getBookById = (req, res, next) => {
    res.json(Book.getById(req.params.id));
}

exports.save = (req, res) => {
    const {title, author} = req.body;
    res.json(new Book(null, title, author).save());
}

exports.search = (req, res) => {
    res.json(Book.search(req.query.firstname))
}