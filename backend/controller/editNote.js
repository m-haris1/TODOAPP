const Note = require("../model/Note");

exports.editNote = async (req,res)=>{
   try{
    const noteId=req.params.noteId;
    const {title, content, tags, isPinned}= req.body;
    const {user}=req.user;
    const userId = req.user.user._id; 

    if(title==null && content==null && tags==null && isPinned==null){
        return res.status(400).json({
            success:false,
            message:"Nothing to update"
        })
    }
    try{
        const note= await Note.findOne({ _id:noteId, userId:userId})
        if(note==null){
            return res.status(401).json({
                success:false,
                message:"No note with this id found"
            })
        }

        if(title){
            note.title=title;
        }

        if(content){
            note.content=content;
        }
        
        if(tags){
            note.tags=tags;
        }

        if(isPinned){
            note.isPinned=isPinned;
        }
        await note.save();
        return res.status(200).json({
            success:true,
            message:"Note updated successfully"
        })
    }catch(err){
        console.log(err);
        return res.status(401).json({
            success:false,
            note,
            message:"Can not edit"
        })
    }
   }catch(err){
    console.log(err);
    return res.status(401).json({
        success:false,
        message:"Internal server error"
    })
   }
}