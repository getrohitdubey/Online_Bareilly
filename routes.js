const express = require('express'),
    router = express.Router(),
    category = require('./apis/category.api'),
    product = require('./apis/product.api');


router.use('/category', category);
router.use('/product', product);

module.exports = router;