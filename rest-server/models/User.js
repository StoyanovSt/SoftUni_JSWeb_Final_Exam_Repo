const mongoose = require('mongoose');
// const PASSWORD_VALIDATION_PATTERN = /^[a-zA-Z0-9]{6,}$/;
// const USERNAME_VALIDATION_PATTERN = /^[a-zA-Z]{4,}$/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        validate: /^[a-zA-Z]{4,}$/,
    },
    password: {
        type: String,
        require: true,
        validate: /^[a-zA-Z0-9]{6,}$/,
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
        },
    ]


});

module.exports = mongoose.model('User', userSchema);