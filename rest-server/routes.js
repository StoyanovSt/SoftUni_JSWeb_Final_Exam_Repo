const router = require('express').Router();
const User = require('./models/User');
const Product = require('./models/Product');
const bcrypt = require('bcrypt');
const config = require('./config/config');
const jwt = require('jsonwebtoken');

// home page
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
            });
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
                                    message: 'Internal server error!',
                                });
                            });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'Internal server error!',
                        });
                    });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });

});

router.post('/login', (req, res) => {
    // get user data
    const userData = req.body;

    // validate data
    //.................................................

    // check if such user exists in database
    User.findOne({ username: userData.username })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: 'User not found!',
                });
            }

            // check if passwords match
            bcrypt.compare(userData.password, user.password)
                .then(response => {
                    if (!response) {
                        res.status(409).json({
                            message: 'Username or password do not match the requirements!',
                        });
                    }

                    // generate jwt and send it to the client as json
                    const token = jwt.sign({
                        _id: user._id,
                        username: user.username
                    }, config.SECRET);

                    res.status(200).json({
                        message: 'User is logged!',
                        token: token,
                    });

                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                    });
                });

        })
        .catch(error => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });

});

// logged user pages
router.post('/product/create', (req, res) => {
    // get data
    let { product, description, imageUrl, price, seller } = req.body;

    //validate data
    //................................................

    // store in database
    const product = new Product({
        product,
        description,
        imageUrl,
        price,
        // user id
        // seller:       
    });


    product.save()
        .then(product => {
            // get current user from jwt from req headers
            User.findById()
                .then(user => {
                    user.products.push(product._id);
                    return user.save();
                })
                .then(response => {
                    res.status(201).json({
                        message: 'Article is stored in database!',
                    });
                })
                .catch(err => {
                    res.status(404).json({
                        message: 'User not found!',
                    });
                });

        })
        .catch(err => {
            res.status(409).json({
                message: 'Article information does not match the requirements!',
            });
        });
});

router.get('/product/delete/:productId', (req, res) => {
    // get product id
    const productId = req.params.productId;

    // find it is database by id and delete it
    Product.findByIdAndDelete(productId)
        .then(response => {
            res.status(200).json({
                message: 'Successfully deleted!',
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });
});

router.get('/product/edit/:productId', (req, res) => {
    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });
});

router.post('/product/edit/:productId', (req, res) => {
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
                    res.status(201).json({
                        product,
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        })
});

router.get('/product/:productId/details', (req, res) => {
    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });

});

// user profile page
router.get('/user/profile', (req, res) => {
    // get current user by id
    // TODO: user ID
    User.findById()
        .populate('products')
        .then(user => {
            res.status(200).json({
                user,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
            });
        });

});

//---------------------------------------
// page not found
router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Page not found!'
    });
});

module.exports = router;