

module.exports=(sequelize,DataTypes)=>{
  
    const User=sequelize.define("Users",{
       name:{
           type:DataTypes.STRING,
           allowNull:false
       },
       password:{
        type:DataTypes.STRING,
           allowNull:false
       }

    })


    return  User;
}

