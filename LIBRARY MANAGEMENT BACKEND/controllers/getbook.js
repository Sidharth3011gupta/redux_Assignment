const Book = require("../models/Schema");

async function getBook(req,res) {

 try{
  var bookData = null;
  bookData = await Book.find();

if(bookData){
 res.status(200).json({
     message :"Data Fetched Successfully",
     book : bookData 
 })
}
else
{

}
 } catch (err){
  res.status(500).json({
    message :"Error Fetching Books"
})
 }
}



module.exports = {getBook}