
const express=require("express");
const { getAllProducts, createProduct } = require("../../contollers/products.controller");
const { ProductValidate } = require("../../middlewares/productValidator");
const router=express.Router();




router.get("/",getAllProducts);

router.post("/createProduct",ProductValidate,createProduct)

module.exports = {
    productRouter:router
}