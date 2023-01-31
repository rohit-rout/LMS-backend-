// const { Sequelize, DataTypes } = require("sequelize");
module.exports=(sequelize,DataTypes)=>{
  
    const Book=sequelize.define("Books",{
       title:{
           type:DataTypes.STRING,
           unique:true,
           allowNull:false,
       },
       author:{
        type:DataTypes.STRING,
           allowNull:false
       }
       

    })
    return  Book;
}

