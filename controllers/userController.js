
const { Users } =require("../models");

exports.login=async(req,res,next)=>{
  
    const data=req.body;
    console.log(data);

    let user=await Users.findOne({ where :{name:data.name}});
    if(!user){
        res.json({
            success:false,
            message:"wrong username or password"
        })
        return ;
    }
   

    user=user.dataValues;
   
    if( user.password!==data.password){
        res.json({
            success:false,
            message:"wrong username or password"
        })
        return ;
    }


    
    res.json({
        success:true,
        user
    })
}

exports.register=async(req,res,next)=>{

    const user=req.body;
    
    await Users.create(user);
    res.json({
        success:true,
        user
    })
}

