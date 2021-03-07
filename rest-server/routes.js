const router = require('express').Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const config = require('./config/config');

// home page
router.get('/', (req, res) => {
    res.json({
        message: 'OK'
    });
});

// auth
router.post('/register', (req, res) => {
    // get user data
    const userData = req.body;

    // validate data
    //......................

    // chech if such user exists in database
    User.findOne({ username: userData.username })
        .then(user => {
            if (user) {
                res.status(409).json({
                    message: 'User already exists',
                });

            } else {
                // check if password and rePassword matches
                if (userData.password !== userData.rePassword) {
                    res.status(400).json({
                        message: 'Passwords do not match!',
                    });
                }

                // hash password
                bcrypt.genSalt(config.SALT_ROUNDS)
                    .then(salt => {
                        bcrypt.hash(userData.password, salt)
                            .then(hash => {
                                // store in database
                                const user = new User({ username: userData.username, password: hash });
                                user.save()
                                    .then(response => {
                                        res.status(201).json({
                                            message: 'User is stored in database!',
                                        });

                                    })
                                    .catch(error => {
                                        res.status(409).json({
                                            message: 'Username or password do not match the requirements!',
                                        });
                                    });
                            })
                            .catch(error => {
                                res.status(500).json({
                                    message: error.message,
                                });
                            });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: error.message,
                        });
                    });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: error.message,
            });
        });
    
});


module.exports = router;