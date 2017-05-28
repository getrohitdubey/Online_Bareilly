const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: { type: String, require: true },
    description: String,
    createdDate: { type: Date, default: Date.now }
});

var category = mongoose.model('category', categorySchema);

module.exports = category;