
import { useEffect } from 'react';
import { useState } from 'react'
import ColorInput from './ColorInput'

const ColorConverter = ({color, onChange}) => {

  return (
    <div className='flex flex-wrap  flex-row w-full gap-2 justify-between'>
        <div className='w-full h-14' style={{backgroundColor: color.string()}}></div>

         <form className='flex flex-col gap-2'>
            <ColorInput label={'R:'} value={Math.round(color.red())} onChange ={(e)=> onChange(color.red(e.target.value))}/>
            <ColorInput label={'G:'} value={Math.round(color.green())} onChange ={(e)=> onChange(color.green(e.target.value))}/>
            <ColorInput label={'B:'} value={Math.round(color.blue())} onChange ={(e)=> onChange(color.blue(e.target.value))}/>
        </form>

        <form className='flex flex-col gap-2'>
            <ColorInput label={'C:'} value={Math.round(color.cyan())} onChange ={(e)=> onChange(color.cyan(e.target.value))}/>
            <ColorInput label={'M:'} value={Math.round(color.magenta())} onChange ={(e)=> onChange(color.magenta(e.target.value))}/>
            <ColorInput label={'Y:'} value={Math.round(color.yellow())} onChange ={(e)=> onChange(color.yellow(e.target.value))}/>
            <ColorInput label={'K:'} value={Math.round(color.black())} onChange ={(e)=> onChange(color.black(e.target.value))}/>
        </form>

        <form className='flex flex-col gap-2'>
            <ColorInput label={'H:'} value={Math.round(color.hue())} onChange ={(e)=> onChange(color.hue(e.target.value))}/>
            <ColorInput label={'S:'} value={Math.round(color.saturationl())} onChange ={(e)=> onChange(color.saturationl(e.target.value))}/>
            <ColorInput label={'L:'} value={Math.round(color.lightness())} onChange ={(e)=> onChange(color.lightness(e.target.value))}/>
        </form> 

        
    </div>
  )
}

export default ColorConverter