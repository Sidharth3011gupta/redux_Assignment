
const Product = require('../models/Product');

class ProductController {
  constructor() {
    this.products = []; 
  }

  getAllProducts(req, res) {
    res.json(this.products);
  }

  getProductById(req, res) {
    const product = this.products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  }

  createProduct(req, res) {
    const { name, description, price, inStock } = req.body;
    const product = new Product(name, description, price, inStock);
    this.products.push(product);
    res.status(201).json(product);
  }

  updateProduct(req, res) {
    const product = this.products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).send('Product not found');

    const { name, description, price, inStock } = req.body;
    product.name = name;
    product.description = description;
    product.price = price;
    product.inStock = inStock;

    res.json(product);
  }

  updateProductInStock(req, res) {
    const product = this.products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).send('Product not found');

    const { inStock } = req.body;
    product.inStock = inStock;

    res.json(product);
  }

  deleteProduct(req, res) {
    const index = this.products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).send('Product not found');

    this.products.splice(index, 1);
    res.status(204).send();
  }
}

module.exports = new ProductController();
 


