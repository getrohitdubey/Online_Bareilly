const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    Category = require('../models/category');

router.get('/', function (req, res) {
    Category.find({}).then(function (doc) {
        return res.json(doc);
    }).catch(function (error) {
        return res.json(error);
    })

})

router.get('/:id', function (req, res) {
    var id = req.params.id;
    Category.findById(id).then(function (doc) {
        return res.json(doc);
    }).catch(function (error) {
        return res.json(error);
    })
})

router.post('/', function (req, res) {
    var category = new Category(req.body);
    category.save(function (err, data) {
        if (!err) {
            return res.json('CREATED');
        } else {
            return res.json(err);
        }
    })

});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    Category.findByIdAndUpdate(id, { name: req.body.name, description: req.body.description }, function (err) {
        if (!err) {
            return res.json('UPDATED').;
        } else {
            return res.json(err);
        }
    })
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Category.findByIdAndRemove(id, function (err) {
        if (!err) {
            return res.json('DELETED');
        } else {
            return res.json(err);
        }
    })
});


module.exports = router;