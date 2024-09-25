const Book = require("../models/Schema");

async function postBook(req,res) {
   try{
    const{title,author} = req.body;
    if(!title || !author )
    {
        return res.status(400).json({
            message:"Enter all details"
        })
    }
    const findBook = await Book.findOne({title:title});
    if(findBook)
    {
        return res.status(400).json({
            message : "Book Already Exist"
        })
    }
    const bookData = await Book.create({
        title : title,
        author : author,
        isBorrowed : false,
    })

    res.status(200).json({
        message :"Data Created Successfully",
        book : bookData 
    })
   }
   catch (err){
    res.status(500).json({
        message :"Data Creation Failed",
        error : err 
    })
   }
}
module.exports = {postBook}