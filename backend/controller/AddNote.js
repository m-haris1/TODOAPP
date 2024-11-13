const Note= require("../model/Note.js");

exports.AddNote = async (req,res) => {
    try{
        console.log("Enter add note")
        const {title, content, tags} = req.body;
        const {user}=req.user;
        // ^ This user I pushed while in the middleware

        if(!title){
            return res.status(401).json({
                success:false,
                message:"Title is required"
            })
        }
        if(!content){
            return res.status(401).json({
                success:false,
                message:"Content is required"
            })
        }

        try{
            const note = new Note({
                title,
                content,
                tags: tags,
                userId: user._id
                // ! As we send the user in request body after verification, is also 
                // ! user id.
            });
            await note.save();
            console.log("New Note save");
            return res.status(200).json({
                success:true,
                message:"Note created succesfully"
            })
        }catch(err){
            console.log(err);
            return res.status(401).json({
                success:false,
                message:"Note was not able to make successfully."
            })
    }
}catch(err){
    console.log(err);
    return res.status(401).json({
        success:false,
        message:"Internal server error"
    })
}}

