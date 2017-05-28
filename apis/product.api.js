const express = require('express');
router = express.Router();

router.get('/', function (req, res) {
    res.send("Product Response From Api");
})

module.exports=router;