const { Books } = require("../models");

exports.showBooks = async (req, res, next) => {
  const listofBooks = await Books.findAll();
  res.json({
    success: true,
    listofBooks,
  });
};

exports.createBooks = async (req, res, next) => {
  const book = req.body;
  console.log(book);
  await Books.create(book);
  res.json({
    success: true,
    book,
  });
};

exports.deleteBooks = async (req, res, next) => {
  let book = await Books.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (book) {
    await Books.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      success: true,
      book,
    });
  } else {
    res.status(500).json({
      success: false,
      message: "no book found with that id",
    });
  }
};

exports.getParticularBook = async (req, res, next) => {
  console.log("working here");
  const book = await Books.findOne({ where: { id: req.params.id } });
  if(!book){
    res.status(200).json({
      success: false,
      message: "no book found with that id",
    })
  }else{
    res.status(200).json({
      success:true,
      book
    })
  }
};

exports.updateBook = async (req, res, next) => {
  Books.findOne({ where: { id: req.params.id } })
    .then((record) => {
      if (!record) {
        res.json({
          success: false,
          message: "No record found",
        });
        return;
      }

      console.log(record);

      let values = {
        title: req.body.title,
        author: req.body.author,
      };
      console.log(values);

      record.update(values).then((updatedRecord) => {
        console.log("book updated");
        res.json({
          success: true,
          book: { ...values },
        });
      });
    })
    .catch((error) => {
      // do seomthing with the error
      res.json({
        success: false,
        message: error,
      });
      throw new Error(error);
    });
};
