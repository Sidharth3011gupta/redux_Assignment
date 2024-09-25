const express=require("express");
const { homeRouteV1 } = require("../../contollers/home.controller");
const { productRouter } = require("./product.route");
const router=express.Router();


router.get("/home",homeRouteV1);
router.use("/products",productRouter)

 module.exports= {
    v1Router:router
 }