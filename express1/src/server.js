const express=require("express")
const app=express();
const bodyParser=require("body-parser");
const { port } = require("./config/server.config");
const { apiRouter } = require("./routes");

app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.json())


app.use("/api",apiRouter);
// app.post("/postData",(req,res)=> {    
//     console.log(req.body);
    
// })


// function middlweware1(req,res,next) {
//     console.log("this is 1st middle ware");
//     next();
// }

// function middlweware2(req,res,next) {
//     console.log("this is 2nd middle ware");
//     next();
// }

app.listen(port,()=> {
    console.log(`server staRTED ATE PORT ${port}`)
})

//three ways of sending info from frontend or postman
//1. url params
// 2.query params 
// 3. body

//localhost:3000/product/:id