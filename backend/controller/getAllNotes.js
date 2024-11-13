const Note= require("../model/Note");

exports.getAllNotes= async (req,res)=>{
    // console.log("Get into getAllNotes route");
    console.log(req.user);

    try{
        const allNotes= await Note.find({userId:req.user.user._id});
        if(allNotes){
            console.log("got all notes");
            console.log("All Notes are",allNotes);
            return res.status(200).json({
                success:true,
                allNotes:allNotes,
                message:"All messages of the user retrieved"
            })            
        }

    }catch(err){
        console.log(err);
        return res.status(401).json({
            success:false,
            message:"Message retrieval failed"
        })
    }
}