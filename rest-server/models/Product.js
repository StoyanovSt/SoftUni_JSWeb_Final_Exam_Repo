const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
        minlength: 10,
        maxlength: 150
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
    likes: {
        type: Number,
        default: 0,
    },
    peopleLikedProduct: [],
    seller: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

});

module.exports = mongoose.model('Product', productSchema);