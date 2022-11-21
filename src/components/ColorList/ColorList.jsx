import React from 'react'
import ColorItem from './ColorItem';
import Input from '../UI/Input';
import OutlinedButton from '../UI/OutlinedButton'
import { useState } from 'react';
import Color from 'color';
import { ChromePicker, HuePicker } from 'react-color';
const ColorList = ({colors, onChange, className}) => {
    const[inputColor, setInputColor] = useState('#000000');
    const[displayPicker, setDisplayPicker] = useState(false);
    const hangleAdd = () => {
        onChange([...colors, new Color(inputColor)]);
    }
    const handleDelete = (index, color) =>{
        let copy = [...colors];
        if (index > -1) { 
          copy.splice(index, 1); 
        }
        onChange(copy);
    }
  return (
    <div className={className}>
        <ul>
            {
                colors.map((color, index) => {
                    return(
                        <li key={index}>
                            <ColorItem color={color} index={index} onDelete={handleDelete}/>
                        </li>
                    );
                })
            }
        </ul>
        
        <OutlinedButton className={'w-full'} onClick={() => setDisplayPicker(true)} >Pick color</OutlinedButton>
        {displayPicker ?
            <>
            <div className='fixed z-10'>
                <ChromePicker  styles={{default:  {body: {background: "#27272a"}}}} color={inputColor} onChange={color => setInputColor(color.hex)}/>
            </div>
             <div className='absolute inset-0' onClick={()=>{setDisplayPicker(false); hangleAdd()}} ></div>
             </>
            : null}
        <div className='flex flex-col items-center w-full'>
        
        </div>

    </div>
  )
}

export default ColorList