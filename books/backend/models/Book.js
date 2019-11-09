const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Book = new Schema({
    BookTitle: {
        type: String
    },
    BookAuthor: {
        type: String
    },
    BookDescription: {
        type: String
    },
    BookPages: {
        type: Number
    },
    BookISBN: {
        type: String
    },
}, {
    collection: 'Book'
});

module.exports = mongoose.model('Book', Book);