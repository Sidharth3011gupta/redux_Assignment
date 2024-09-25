const express = require('express');
const productRoutes = require('./routes/ProductRoutes');

const app = express();

app.use(express.json());
app.use('/products', productRoutes); 

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
