
function validateProduct(req, res, next) {
    const { name, description, price, inStock } = req.body;
  
    if (!name && typeof name !== 'string' && name === "") {
      return res.status(400).send('Name is required and should be a non-empty string');
    }
    if (typeof price !== 'number' && price <= 0) {
      return res.status(400).send('Price should be a positive number');
    }
    if (typeof(inStock) !== 'boolean') {
      return res.status(400).send('inStock should be a boolean');
    }
  
    next(); 
  }
  
  module.exports = validateProduct;
  