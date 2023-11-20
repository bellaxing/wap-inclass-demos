let books = [];
let counter = 1;

module.exports = class Book {

    constructor(bookId, title, author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    static getById(bookId) {
        return books.find(b => b.bookId == bookId);
    }

    save(){
        this.bookId = counter++;
        books.push(this);
        return this;
    }

    static search(firstname){
        if(firstname){
            return books.filter(b => b.author.firstname.toLowerCase().includes(firstname.toLowerCase()));
        } else {
            return books;
        }
    }
}