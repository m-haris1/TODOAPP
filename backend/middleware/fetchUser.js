// const jwt=require("jsonwebtoken");
// require("dotenv").config();

// exports.authenticateToken=async (req,res,next)=>{
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if(!token){
//         return res.status(401).json({
//             success:false,
//             message: "Unable to find token"
//         })
//     }

//     // Our last work is to verify the token which we signed earlier
//     await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err){
//             return res.status(401).json({
//                 success:false,
//                 message: "Unable to verify token"
//             })
//         }
//         req.user=user;
//         next();
//     })
// }


// const jwt = require('jsonwebtoken');

// exports.authenticateToken =async  (req, res, next) => {
//   const token = req.body.accessToken;

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Access token missing or invalid"
//     });
//   }
  
//   try{
//     await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//           return res.status(403).json({
//             success: false,
//             message: "Token verification failed"
//           });
//         }
    
//         req.user = user;
//         next();
//       });    
//   }catch(err){
//     console.log(err)
//     return res.status(401).json({
//         success: false,
//         message: "Something went wrong while verifying token"
//     })
//   }
// }




const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    // console.log("Entered middleware");
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // console.log("Take token")
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access token missing or invalid"
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Token verification failed"
      });
    }

    req.user = user;
    next();
  });
};