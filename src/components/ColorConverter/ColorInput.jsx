import React from 'react'

function ColorInput({label, min, max, onChange, value}  ) {
  return (
    <div className={'flex flex-row justify-between w-20'}>
        <label className='w-auto'>{label}</label>
        <input type={"number"} onChange={onChange} min={min} max={max} value={value} className={"w-14 bg-zinc-700 rounded-sm"}
            />
    </div>
  )
}

export default ColorInput