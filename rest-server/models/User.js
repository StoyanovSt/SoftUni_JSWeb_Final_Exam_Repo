const mongoose = require('mongoose');
const PASSWORD_VALIDATION_PATTERN = /^[a-zA-Z0-9]{6,}$/;
const USERNAME_VALIDATION_PATTERN = /^[a-zA-Z]{4,}$/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        // validate: USERNAME_VALIDATION_PATTERN
    },
    password: {
        type: String,
        require: true,
        // validate: PASSWORD_VALIDATION_PATTERN
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
        },
    ]


});

module.exports = mongoose.model('User', userSchema);