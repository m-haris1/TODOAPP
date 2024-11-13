const express= require("express");
const router=express.Router();



// const {login,signup}=require("../controller/Auth")
const {signup,login, getUser} = require("../controller/Auth");
const {AddNote} = require("../controller/AddNote");
const {authenticateToken}=require("../middleware/fetchUser");
const { editNote } = require("../controller/editNote");
const {getAllNotes} = require("../controller/getAllNotes");
const { deleteNote} = require("../controller/deleteNote");
const { getUserInfo } = require("../controller/getUserInfo");
router.post("/signup",signup);
router.post("/login",login);
// router.get("/getUser/:userid",authenticateToken , getUser)
// // (req,res)=>{
// //     return res.status(200).json({
// //         success:true,
// //         message:"Welcome to Dashboard"
// //     })
// // });
router.post("/addNote", authenticateToken, AddNote,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Dashboard"
    })
});
router.put("/editNote/:noteId", authenticateToken, editNote)
//     return res.status(200).json({
//         success:true,
//         message:"Welcome to Dashboard"
//     })
// });

router.get("/getAllNotes", authenticateToken, getAllNotes)
    // ,(req,res)=>{
    //     return res.status(200).json({
    //         success:true,
    //         message:"All Notes of this user extracted"
    //     })
    // });

router.delete("/deleteNote/:noteId", authenticateToken, deleteNote)
//     return res.status(200).json({
//         success:true,
//         message:"Welcome to Dashboard"
//     })
// });

router.get('/getUserInfo', authenticateToken, getUserInfo)
//     ,(req,res)=>{
//     return res.status(200).json({
//         success:true,
//         message:"User Info Retrieved"
//     })
// }

// // router.post('/getUser',fetchUser,async(req,res)=>{

// // })

module.exports=router;