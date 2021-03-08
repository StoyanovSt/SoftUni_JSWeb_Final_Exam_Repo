const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    article: {
        type: String,
        require: true,
        unique: true,
    },
    descreption: {
        type: String,
        require: true,
        minlength: 20,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },

});

module.exports = mongoose.model('Article', articleSchema);