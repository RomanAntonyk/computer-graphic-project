import React, { useState } from 'react'

function Range({label, min, max, onChange, value}) {
    const[rangeValue, setRangeValue] = useState(value)
  return (
    <div>
        <label htmlFor="range">{label}</label>
        <div className='flex items-center'>
            <input type="range" id="range" min={min} max={max} value={rangeValue}
             onChange={(e)=>{setRangeValue(e.target.value); onChange(e.target.value)}}
             className='inline w-11/12 mr-2 caret-purple-700'/>
            <label>{rangeValue}</label>
        </div>
        
     </div>
  )
}

export default Range