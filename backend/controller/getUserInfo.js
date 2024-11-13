const User= require("../model/User");

exports.getUserInfo = async (req,res)=>{
    const {user} = req.user;
    // User Which it gets after calling API
    console.log("User is get user info",user);
    try{
        const findUser=await User.findOne({_id:user._id});
        if (!findUser) {
            return res.status(404).json({
              success: false,
              message: "User not found"
            });
          }
      
          return res.status(200).json({
            success: true,
            user: findUser
          });

    }catch(err){
        console.log(err);
        return res.status(401).json({
            success:false,
            message:"User retrieval failed"
        })
    }
}