import Input from '../UI/Input'
import React from 'react'
import MainContentContainer from '../Containers/MainContentContainer'
import PageContainer from '../Containers/PageContainer'
import SettingsContainer from '../Containers/SettingsContainer'
import PrimaryButton from '../UI/PrimaryButton'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Color from 'color'
import {abs, complex, sin} from 'mathjs'
import ColorList from '../ColorList/ColorList'
import OutlinedButton from '../UI/OutlinedButton'
import ProgressBar from '../UI/ProgressBar'

const Fractal = () => {
    const[width, setWidth] = useState(1000);
    const[height, setHeight] = useState(1000);
    const[zoom, setZoom] = useState(0.4);
    const[real, setReal] = useState(1);
    const[imag, setImag] = useState(0.4);
    const[colorList, setColorList] = useState([new Color('#000004'), new Color('#ffffff'), new Color('#ff033f'), new Color('#000000')]);
    // const[drawProgress, setDrawProgress] = useState(0);
    // const[isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(()=>{
        contextRef.current = canvasRef.current.getContext("2d");
    },[])

    const initCanvas = () => {
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
    }

    const putPoint = (x, y, color) => {
        let context = contextRef.current;
        context.fillStyle = color.string();
        context.fillRect(x, y, 1, 1);
    }
    const fractalFunction = (complexNumber, constantNumber) => {
        return constantNumber.mul(sin(complexNumber));
    }

    const generateColorGradient = (inColors, steps) =>{
        let colorMap = new Array(steps);
        let colorDelta = 1.0 / (inColors.length - 1);
        for(let i = 0; i<steps; i++){
           let globalRel = i / (steps - 1);
           let index0 = Math.floor(globalRel / colorDelta);
           let index1 = Math.min(inColors.length-1, index0 + 1);
           let localRel = (globalRel - index0 * colorDelta) / colorDelta;
           let c0 = inColors[index0];
           let r0 = c0.red();
           let g0 = c0.green();
           let b0 = c0.blue();

           let c1 = inColors[index1];
           let r1 = c1.red();
           let g1 = c1.green();
           let b1 = c1.blue();

           let dr = r1-r0;
           let dg = g1-g0;
           let db = b1-b0;

           let r = Math.floor(r0 + localRel*dr);
           let g = Math.floor(g0 + localRel*dg);
           let b = Math.floor(b0 + localRel*db);
           
           colorMap[i] = new Color({r:r, g:g, b:b});
        }
        return colorMap;
    }

    // const countProgress = (currentX) =>{
    //     let allPixels = width*height;
    //     let renderedPixels = currentX*height;
    //     return Math.round((renderedPixels/allPixels)*100);
    // }
    const drawFractal = ()=>{
        initCanvas();
       // setIsDrawing(true);
        const colorMap = generateColorGradient(colorList, 51);
        let constant = complex(real, imag);
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++){
                let real = 2 * (x - width / 2) / (width * zoom / 2);
                let imag = 1.33 * (y - height / 2) / (height * zoom / 2);
                let z = complex(real, imag);
                let itr = 0;
                do{
                    itr++;
                    z = fractalFunction(z, constant);
                    if(abs(z.im )> 50){
                        break;
                    }
                }while(itr < 50);
                putPoint(x,y, colorMap[itr]);
                
            }
          // setDrawProgress(countProgress(x));
        }
        //setIsDrawing(false);
    }

    function saveCanvasImage() {
        const cvs = canvasRef.current
        const link = document.createElement('a');
        link.download = 'fractal.png';
        link.href = cvs.toDataURL();
        link.click();
    }

  return (
    <PageContainer>
        <MainContentContainer>
        <canvas ref={canvasRef}></canvas>
        </MainContentContainer>

        <SettingsContainer>
            {/* <div className='flex flex-col w-full gap-2'> */}
                <h1 className='text-xl mb-2 text-center'>Fractal Properties</h1>
                <label>Width:</label>
                <Input value={width} onChange={e=>setWidth(e.target.value)} type="number" min={0}/>
                <label>Height:</label>
                <Input value={height} onChange={e=>setHeight(e.target.value)} type="number" min={0}/>
                <label>Zoom:</label>
                <Input value={zoom} onChange={e=>setZoom(e.target.value)} type="number"/>
                <h3 className='text-lg'>Complex constant:</h3>
                <label>Real:</label>
                <Input value={real} onChange={e=>setReal(parseFloat(e.target.value))}type="number"/>
                <label>Imaginary:</label>
                <Input value={imag} onChange={e=>setImag(parseFloat(e.target.value))} type="number"/>
                <h3 className='text-lg text-center'>Colors</h3>
                <ColorList className='mx-2 ' colors={colorList} onChange={list=>setColorList(list)}/>
                
                {/* {isDrawing ? 
                    <>
                        <h3 className='text-lg'>Drawing</h3>
                        <ProgressBar completed={drawProgress} bgcolor={"#9333ea"}></ProgressBar>
                    </>: null} */}
                
            {/* </div> */}
                <PrimaryButton className={'mt-10'} onClick={drawFractal}>Draw Fractal</PrimaryButton>
                <OutlinedButton onClick={saveCanvasImage}>Download</OutlinedButton>
        </SettingsContainer>
    </PageContainer>
  )
}

export default Fractal