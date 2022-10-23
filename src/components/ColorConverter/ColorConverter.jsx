
import { useState } from 'react'
import ColorInput from './ColorInput'
import Color from 'color';

const ColorConverter = () => {
     const [color, setColor] = useState(new Color({r:201, g:0, b:154}));


  return (
    <div className='flex flex-wrap  flex-row w-full gap-2 justify-between'>
        <div className='w-full h-14' style={{backgroundColor: color.string()}}></div>

         <form className='flex flex-col gap-2'>
            <ColorInput label={'R:'} value={Math.round(color.red())} onChange ={(e)=> setColor((prev)=> prev.red(e.target.value))}/>
            <ColorInput label={'G:'} value={Math.round(color.green())} onChange ={(e)=> setColor((prev)=> prev.green(e.target.value))}/>
            <ColorInput label={'B:'} value={Math.round(color.blue())} onChange ={(e)=> setColor((prev)=> prev.blue(e.target.value))}/>
        </form>

        <form className='flex flex-col gap-2'>
            <ColorInput label={'C:'} value={Math.round(color.cyan())} onChange ={(e)=> setColor((prev)=> prev.cyan(e.target.value))}/>
            <ColorInput label={'M:'} value={Math.round(color.magenta())} onChange ={(e)=> setColor((prev)=> prev.magenta(e.target.value))}/>
            <ColorInput label={'Y:'} value={Math.round(color.yellow())} onChange ={(e)=> setColor((prev)=> prev.yellow(e.target.value))}/>
            <ColorInput label={'K:'} value={Math.round(color.black())} onChange ={(e)=> setColor((prev)=> prev.black(e.target.value))}/>
        </form>

        <form className='flex flex-col gap-2'>
            <ColorInput label={'H:'} value={Math.round(color.hue())} onChange ={(e)=> setColor((prev)=> prev.hue(e.target.value))}/>
            <ColorInput label={'S:'} value={Math.round(color.saturationl())} onChange ={(e)=> setColor((prev)=> prev.saturationl(e.target.value))}/>
            <ColorInput label={'L:'} value={Math.round(color.lightness())} onChange ={(e)=> setColor((prev)=> prev.lightness(e.target.value))}/>
        </form> 

        
    </div>
  )
}

export default ColorConverter