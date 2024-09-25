class Product {
    constructor() {
      this.name = '';
      this.price = 0;
      this.category = '';
      this.discount = 0;
    }
  
    displayProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`Price: ${this.price}`);
      console.log(`Category: ${this.category}`);
      console.log(`Discount: ${this.discount}%`);
      console.log("_______________________________________________")
    }

    static ProductBuilder = class {
      static product = new Product(); 
    
      static setName(name) {
        this.product.name = name;
        return this;
      }
    
      static setPrice(price) {
        this.product.price = price;
        return this;
      }
    
      static setCategory(category) {
        this.product.category = category;
        return this;
      }
    
      static setDiscount(discount) {
        this.product.discount = discount;
        return this;
      }
    
      static build() {
        const builtProduct = this.product;
        this.product = new Product(); 
        return builtProduct; 
      }
    }
  }
  
  const myProduct = Product.ProductBuilder
    .setName('ACER Laptop')
    .setPrice(52000)
    .setCategory('Electronics')
    .setDiscount(10)
    .build(); 
    myProduct.displayProduct();
    const myProduct2 = Product.ProductBuilder
    .setName('ASUS Laptop')
    .setPrice(53000)
    .setCategory('Electronics')
    .setDiscount(30)
    .build(); 
  
  myProduct2.displayProduct();
  