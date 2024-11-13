import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({tags,setTags}) => {

    const [inputValue,setInputValue]=useState("");
    function handleInputChange(e){
        setInputValue(e.target.value);
    }

    const addNewTag=()=>{
        setTags([...tags, inputValue.trim()]);
        setInputValue("")
    }

    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            addNewTag();
        }
    }

    const handleRemoveTag=(e)=>{
        setTags(tags.filter((tag) => tag!== e ));
    };

  return (
    <div>
        {tags?.length > 0 && (
            <div className='flex gap-x-1'>
                {tags.map((tag, index) => (
                        <span key={index} className='bg-slate-100 rounded px-3 py-1 mx-2 flex text-blue-600'>
                            # {tag}
                            <button onClick={()=>{
                                handleRemoveTag(tag);
                            }}>
                                <MdClose/>
                            </button>
                        </span>
                    ))}
            </div>

        )}
        <div className='flex items-center gap-4 mt-3'>
            <input
            type='text'
            placeholder="Add Tags"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ></input>


            <button className='w-8 h-8 flex items-centre justify-center rounded bg-white
            text-blue-700 hover:bg-blue-700 hover:text-white'
            onClick={addNewTag}
            >
                <MdAdd
                className=' text-2xl'
                ></MdAdd>
            </button>
        </div> 
    </div>
  )
}

export default TagInput
