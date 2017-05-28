const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost:27017/online_bareilly');

module.exports=connection;