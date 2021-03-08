const mongoose = require('mongoose');
const PASSWORD_VALIDATION_PATTERN = /^[a-zA-Z0-9]{6,}$/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        validate: PASSWORD_VALIDATION_PATTERN
    },
    articles: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Article',
        },
    ]


});

module.exports = mongoose.model('User', userSchema);