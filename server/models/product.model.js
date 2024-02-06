const mongoose = require('mongoose');

const ProducSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'title is reqiured'] },
    price: { type: Number, required: [true, 'price is reqiured'] },
    description: { type: String, required: [true, 'description is reqiured'], min: [3, 'description must be atleast 3 characters'] },
}, { timestamps: true })

const Product = mongoose.model('Product', ProducSchema);
module.exports = Product;