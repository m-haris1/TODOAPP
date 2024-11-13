const mongoose = require("mongoose");


const userSchema= new mongoose.Schema({
    fullName: {
        type:"String",
        isrequired:true,
        trim: true,
    },
    email:{
        type:"String",
        isrequired:true,
        trim: true,
    },
    password:{
        type:"String",
        isrequired:true,
    },
    createdOn:{
        type:Date,
        isrequired:true,
        default:new Date().getTime()
    }
})

module.exports=mongoose.model("User",userSchema);