import React from 'react'
import { useState } from 'react'
import PageContainer from '../Containers/PageContainer'
import SettingsContainer from '../Containers/SettingsContainer'
import ColorHelp from './Help/ColorHelp'
import { FractalHelp } from './Help/FractalHelp'
import OutlinedButton from '../UI/OutlinedButton'
import TransformationHelp from './Help/TransformationHelp'

const Help = () => {
    const[display, setDisplay] = useState([true, false, false]);


    const show = (index) =>{
        let newDisplay = [false, false, false];
        newDisplay[index] = true
        setDisplay(newDisplay);
    }
  return (
    <PageContainer>
        <div className='w-full  px-10 text-justify overflow-y-scroll' style={{height: 'calc(100vh - 4rem)'}}>
           {
            display[0] ? <FractalHelp/> : null
           }
            {
            display[1] ? <ColorHelp/> : null
           }
            {
            display[2] ? <TransformationHelp/> : null
           }
        </div>
        <SettingsContainer>
            <div className='mt-10 flex flex-col justify-center gap-2'>
                <OutlinedButton onClick={()=>show(0)}>Fractal</OutlinedButton>
                <OutlinedButton onClick={()=>show(1)}>Color</OutlinedButton>
                <OutlinedButton onClick={()=>show(2)}>Transformation</OutlinedButton>
            </div>
        </SettingsContainer>
    </PageContainer>

  )
}

export default Help