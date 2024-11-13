import React from 'react'
import {MdOutlinePushPin, MdCreate, MdDelete} from "react-icons/md"

const Card = (
    {title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote}
) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow transition-all lazy'>
      <div className='flex items-center justify-between'>
        <div>
            <h6 className='text-sm font-medium'>{title}</h6>
            <span className='text-xs text-slate-500'>{Date.now()}</span>
        </div>
        <MdOutlinePushPin className={` ${isPinned}===true ? text-blue-600: text-slate-500`} onClick={onPinNote}/>
      </div>
      <p className='text-left text-sm'> {content?.slice(0,60)}</p>
      <div className='flex items-center gap-2'>
         <div className='card-tags'>
        {tags.map((tag, index) => (
          <span key={index} className='tag text-sm text-blue-500'>
            {tag}
          </span>
        ))}
      </div>
        <div className='flex items-center gap-2'>
            <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
            />
            <MdDelete
            className="hover:text-red-600"
            onClick={onDelete}
            />
        </div>
      </div>
    </div>
  )
}

export default Card
