const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
        },
    ]


});

module.exports = mongoose.model('User', userSchema);