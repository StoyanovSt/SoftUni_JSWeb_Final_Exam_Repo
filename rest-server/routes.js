const router = require('express').Router();
const User = require('./models/User');
const Product = require('./models/Product');
const bcrypt = require('bcrypt');
const config = require('./config/config');
const jwt = require('jsonwebtoken');
const isAuthorized = require('./middlewares/isAuthorized.js');

// Home page
router.get('/', (req, res) => {
    // get all products
    Product.find()
        .lean()
        .then(products => {
            res.status(200).json({
                products
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });

});

// AUTH-----------------------------
// Register
router.post('/register', (req, res) => {
    // get user data
    const userData = req.body;

    // validate data
    if (!userData.username.match(config.USERNAME_VALIDATION_PATTERN)) {
        res.status(409).json({
            message: 'Username must be atleast four characters long and may contains only english letters and digits!',
            hasError: true,
        });

        return;
    }

    if (!userData.password.match(config.PASSWORD_VALIDATION_PATTERN)) {
        res.status(409).json({
            message: 'Password must be atleast six characters long and may contains only english letters and digits!',
            hasError: true,
        });

        return;
    }

    // chech if such user exists in database
    User.findOne({ username: userData.username })
        .then(user => {
            if (user) {
                res.status(409).json({
                    message: 'User already exists!',
                    hasError: true,
                });

                return;

            } else {
                // check if password and rePassword matches
                if (userData.password !== userData.rePassword) {
                    res.status(400).json({
                        message: 'Passwords do not match!',
                        hasError: true,
                    });

                    return;
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
                                            message: 'Successful registration!',
                                            hasError: false,
                                        });

                                    })
                                    .catch(error => {
                                        res.status(500).json({
                                            message: 'Internal server error!',
                                            hasError: true,
                                        });
                                    });
                            })
                            .catch(error => {
                                res.status(500).json({
                                    message: 'Internal server error!',
                                    hasError: true,
                                });
                            });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'Internal server error!',
                            hasError: true,
                        });
                    });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });

});

// Login
router.post('/login', (req, res) => {
    // get user data
    const userData = req.body;

    // check if such user exists in database
    User.findOne({ username: userData.username })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: 'Invalid username or password!',
                    hasError: true,
                });

                return;
            }

            // check if passwords match
            bcrypt.compare(userData.password, user.password)
                .then(response => {
                    if (!response) {
                        res.status(409).json({
                            message: 'Invalid username or password!',
                            hasError: true,
                        });

                        return;
                    }

                    // generate jwt and send it to the client as json
                    const token = jwt.sign({
                        _id: user._id,
                    }, config.SECRET);

                    res.status(200).json({
                        message: 'Successful logged in!',
                        token: token,
                        username: user.username,
                        hasError: false,
                    });

                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                        hasError: true,
                    });
                });

        })
        .catch(error => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });

});

//----------------------------------------------------------------------------
// Create product
router.post('/product/create', isAuthorized, (req, res) => {
    // get data
    let { product, description, imageUrl, price } = req.body;

    //validate data
    if (product === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (description === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (description.length < 10 || description.length > 150) {
        res.status(409).json({
            message: 'Description must be between 10 and 150 characters long!',
            hasError: true,
        });

        return;
    }

    if (imageUrl === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (price === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (price < 0) {
        res.status(409).json({
            message: 'Selling price must be non negative number!',
            hasError: true,
        });

        return;
    }

    const userId = req.user._id;

    // store in database
    const newProduct = new Product({
        product,
        description,
        imageUrl,
        price,
        seller: userId,
    });


    newProduct.save()
        .then(product => {
            User.findById(userId)
                .then(user => {
                    user.products.push(product._id);
                    return user.save();
                })
                .then(response => {
                    res.status(201).json({
                        message: 'Product successfully created!',
                        hasError: false,
                    });
                })
                .catch(err => {
                    res.status(404).json({
                        message: 'User not found!',
                        hasError: true,
                    });
                });

        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong! Failed to store product in database!',
                hasError: true,
            });
        });
});

// Delete product
router.get('/product/:productId/delete', isAuthorized, (req, res) => {
    // get product id
    const productId = req.params.productId;

    // find it is database by id and delete it
    Product.findByIdAndDelete(productId)
        .then(response => {
            res.status(200).json({
                message: 'Successfully deleted!',
                hasError: false,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });
});

// Edit product
router.get('/product/:productId/edit', isAuthorized, (req, res) => {
    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
                hasError: false,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: false,
            });
        });
});

router.post('/product/:productId/edit', isAuthorized, (req, res) => {
    // get editted data
    const { product, description, imageUrl, price, seller } = req.body;

    // get product id
    const productId = req.params.productId;

    // find one and update multiple
    Product.updateOne({ _id: productId }, { product: product })
        .then(response => {
            return Product.updateOne({ _id: productId }, { description: description });
        })
        .then(response => {
            return Product.updateOne({ _id: productId }, { imageUrl: imageUrl });
        })
        .then(response => {
            return Product.updateOne({ _id: productId }, { price: price });
        })
        .then(response => {
            return Product.updateOne({ _id: productId }, { seller: seller });
        })
        .then(response => {
            // get product by id from database
            Product.findById(productId).lean()
                .then(product => {
                    res.status(200).json({
                        product,
                        hasError: false,
                        message: 'Product has been successfully eddited!',
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                        hasError: true,
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        })
});

// Product details page
router.get('/product/:productId/details', isAuthorized, (req, res) => {
    const currentLoggedUserId = req.user._id;

    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
                currentLoggedUserId
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });

});

// User profile page
router.get('/user/profile', isAuthorized, (req, res) => {
    // get current user by id
    const currentLoggedUserId = req.user._id;

    // TODO: user ID
    User.findById(currentLoggedUserId)
        .populate('products')
        .then(user => {
            res.status(200).json({
                username: user.username,
                products: user.products,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });

});

// Like product logic
router.get('/product/:productId', (req, res) => {
    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
                hasError: false,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: false,
            });
        });
});

router.patch('/product/:productId', (req, res) => {
    // get editted data
    const { countOfLikes, currentUser } = req.body;

    // get product id
    const productId = req.params.productId;

    // find one and update multiple
    Product.updateOne({ _id: productId }, { likes: countOfLikes })
        .then(response => {
            return Product.updateOne({ _id: productId }, { $push: { peopleLikedProduct: currentUser } })
        })
        .then(response => {
            // get product by id from database
            Product.findById(productId).lean()
                .then(product => {
                    res.status(200).json({
                        product,
                        hasError: false,
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                        hasError: true,
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        })
});

//---------------------------------------

module.exports = router;