const mongoose= require("mongoose");

const noteSchema= new mongoose.Schema({
    title: {
    type:"String",
    isrequired:true,
    },
    content:{
        type:"String",
        isrequired:true,
    },
    tags:{
        type:[String],
        default:[]
    },
    isPinned:{
        type:Boolean,
        default:false
    },
    userId:{
        type:"String",
        isrequired:true
    },
    createdOn:{
        type:Date,
        default:new Date().getTime()
    }
})

module.exports= mongoose.model("Note",noteSchema);