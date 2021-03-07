const router = require('express').Router();

// home page
router.get('/', (req, res) => {
    res.json({
        message: 'OK'
    });
});

module.exports = router;