const express = require("express");
const { postBook } = require("../controllers/addbooks");
const { getBook } = require("../controllers/getbook");
const { updateBook, updateStatus } = require("../controllers/updatebooks");
const { deleteBook } = require("../controllers/deletebooks");

const router = express.Router();

router.post("/",postBook);
router.get("/",getBook);
router.put("/",updateBook);
router.patch("/",updateStatus);
router.delete("/",deleteBook)

module.exports = router