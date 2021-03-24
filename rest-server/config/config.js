const config = {
    PORT: 5000,
    DB_CONNECTION: 'mongodb://localhost:27017/marketplace',
    SALT_ROUNDS: 9,
    SECRET: 'public',
    PASSWORD_VALIDATION_PATTERN: /^[a-zA-Z0-9]{6,}$/,
    USERNAME_VALIDATION_PATTERN: /^[a-zA-Z0-9]{4,}$/,
};

module.exports = config;