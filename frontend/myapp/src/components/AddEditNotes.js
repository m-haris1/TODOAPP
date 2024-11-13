import React, { useState } from 'react'
import TagInput from './TagInput'
import { MdClose } from 'react-icons/md';
import apiClient from '../utils/axiosInstance';
const AddEditNotes = ({type,closeHandler,noteData,getAllNotes}) => {
    
    const [title,setTitle]=useState(noteData?.title || "");
    const [content,setContent]=useState(noteData?.content || "");
    const [tags,setTags]=useState(noteData?.tags || []);
    const [err,setErr]=useState(null);

    const editNote=async()=>{
      try{
        const noteId = noteData._id;
        console.log("Note Id is : ",noteId);
        const response = await apiClient.put(`/editNote/${noteId}`,{
          title,
          content,
          tags
        });
        if(response!==null){
          // console.log("")
          getAllNotes();
          closeHandler();
        }

      }catch(err){
        console.log(err);
      }
    }



    const addNote = async()=>{
      try{
        const response = await apiClient.post("/addNote",{
          title,
          content,
          tags
        });
        if(response!==null){
          console.log("All Notes Found")
          getAllNotes();
          closeHandler();
        }

      }catch(err){
        console.log(err);
      }
    }

    const handleAddNote= () =>{
      if(!title){
        setErr("Please enter the title")
      }
      else if(!content){
        setErr("Please enter the content")
      }
      else if(tags?.length === 0){
        setErr("Please enter the tags")
      }          
      else{
        setErr("");
        if(type==="edit"){
          editNote();
        } else{
          addNote();
        }        
      }
    }
  return (
    <div className='bg-white my-3 relative'>
      <button className='absolute flex justify-center items-center text-black hover:text-red-600 top-3 right-1 p-4 text-2xl'
      onClick={closeHandler}
      >
        <MdClose></MdClose>
      </button>
      <div className='flex flex-col gap-2'>
        <label htmlFor='title'>Title</label>
        <input
            className='title text-2xl text-slate-950 outline-none'
            placeholder='Type the title'
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='content'>Content</label>
        <textarea
            type="text"
            className='content text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded'
            placeholder='Type the content'
            value={content}
            onChange={(e)=>{
                setContent(e.target.value)
            }}
            rows={10}
        />
        <div className="mt-3">  
            <label htmlFor='tags'>Tags</label>
            <TagInput tags={tags} setTags={setTags}></TagInput>
        </div>

        {
          err && <p className='text-sm text-red-600'> {err} </p>
        }
        <button className='font-medium mt-5 mx-2 ' onClick={handleAddNote}>
            {type==="add" ? ("Add Note"):("Update Note")}
        </button>
      </div>

    </div>
  )
}

export default AddEditNotes
