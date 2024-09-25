const Book = require("../models/Schema")

async function deleteBook(req,res) {
  try{
    const {id} = req.body

    const bookData = await Book.findByIdAndDelete ({_id:id})

    res.status(200).json({
        message :"Data Deleted Successfully",
        book : bookData 
    })
  }
  catch (err){
    res.status(500).json({
        message :"Data Deletion Failed",
        book : bookData 
    })
  }
}

module.exports = {deleteBook}