import React from 'react'

const ColorItem = ({color, index, onDelete, onEdit}) => {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex gap-1 items-center'>
            <div className='w-10 h-5' style={{backgroundColor: color.string()}}></div>
            <span>{color.hex()}</span>
        </div>
        <div className='flex gap-1'>
            <button className='text-red-400 hover:underline' onClick={()=>onDelete(index, color)}>Delete</button>
        </div>
    </div>
  )
}

export default ColorItem