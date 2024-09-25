
const { v4: uuidv4 } = require('uuid');

class Product {
  constructor(name, description, price, inStock) {
    this.id = uuidv4(); 
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }
}

module.exports = Product;
