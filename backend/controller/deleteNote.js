const Note = require("../model/Note");
const { findByIdAndDelete } = require("../model/User");

exports.deleteNote = async (req,res)=>{
    const noteId=req.params.noteId;
    const user=req.user.user;
    const userId = req.user.user._id;
    try{
        const note = await Note.findOne({ _id: noteId, userId: userId })
        if(!note){
            return res.status(401).json({
                success:false,
                message:"Note not found"
            })
        }
        // await Note.findOne({userId: userId, _id:noteId});
        await Note.findByIdAndDelete(noteId);
        return res.status(200).json({
            success:true,
            message:"Note deleted successfully"
        })
    }catch(err){
        console.log(err);
        return res.status(400).json({
            success:false,
            message:"Internal server error"
        })
    }
    
}