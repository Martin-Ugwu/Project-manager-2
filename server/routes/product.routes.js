const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/product', ProductController.getAllProduct)
    app.get('/api/product/:id', ProductController.getOneProduct)
    app.patch('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}