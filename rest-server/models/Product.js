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
        minlength: 20,
        maxlength: 200
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

module.exports = mongoose.model('Product', productSchema);