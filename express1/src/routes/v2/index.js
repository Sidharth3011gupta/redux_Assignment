const express=require("express");
const { homeRouteV2 } = require("../../contollers/home.controller");
const router=express.Router();


router.get("/home",homeRouteV2)

 module.exports= {
    v2Router:router
 }