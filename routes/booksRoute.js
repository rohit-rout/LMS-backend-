const express = require("express");
const {showBooks, createBooks, updateBook, deleteBooks, getParticularBook}=require("../controllers/booksController");
const router = express.Router();



router.route("/books").get(showBooks);
router.route("/book/:id").get(getParticularBook);
router.route("/book/new").post(createBooks);
router.route("/book/edit/:id").post(updateBook);
router.route("/book/delete/:id").delete(deleteBooks);

module.exports=router;

