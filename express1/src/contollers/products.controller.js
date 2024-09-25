const { products } = require("../model/product");

  function getAllProducts( req,res) {
    return res.json({
        products: products
    })
  }

  function createProduct(req,res) {
      console.log(req.body);

      const {name,price,isStock}=req.body;

      console.log(name,price,isStock);
      

      const newProduct= {
        id: products.length + 1,
        name: name,
        price:price,
        isStock
      }
       console.log(newProduct)
       products.push(newProduct);

      return res.json({
        msg: "product created successfully"
      })
  }

//   function deleteProduct

  module.exports= {
    getAllProducts,
    createProduct
  }