const Product = require('../models/product.model');


module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
    .then((newProduct) => {
        res.status(201).json({
            product: newProduct
        });
    })
    .catch((err) =>{
        console.log(err);
        res.status(400).json(err);
    })
}

module.exports.getAllProduct =(req, res) =>{
    Product.find({})
    .then((products) => {
        res.json({
            products
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.getOneProduct =(req, res) =>{
    Product.findOne({_id: req.params.id})
    .then((product) => {
        res.json({
            product
        })
    })
    .catch((err) => {
        res.json(err)
    })
}


module.exports.updateProduct =(req, res) =>{
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((updateproduct) => {
        res.json({
            updateproduct
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.deleteProduct =(req, res) =>{
    Product.deleteOne({_id: req.params.id})
    .then((results) => {
        res.json({
            results
        })
    })
    .catch((err) => {
        res.json(err)
    })
}