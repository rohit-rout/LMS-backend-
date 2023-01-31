const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db=require("./models");
const CORS=require('cors');
app.use(CORS());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes import
const booksRoutes=require("./routes/booksRoute");
const userRoutes=require("./routes/userRoute");

//router middleware
app.use(booksRoutes);
app.use(userRoutes);


//connect database
db.sequelize.sync().then(()=>{
  const server = app.listen(4000, () => {
      console.log(`Server is working on http://localhost:4000`);
  });

})


  
