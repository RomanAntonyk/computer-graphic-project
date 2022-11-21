import React, { useRef, useState } from 'react'
import ColorConverter from '../ColorConverter/ColorConverter'
import PrimaryButton from '../UI/PrimaryButton'
import OutlinedButton from '../UI/OutlinedButton'
import Range from '../UI/Range'
import Color from 'color'
import SettingsContainer from '../Containers/SettingsContainer'
import PageContainer from '../Containers/PageContainer'
import MainContentContainer from '../Containers/MainContentContainer'
import { useEffect } from 'react'

function ColorPage() {
  const[coef, setCoef] = useState(0);
  const[hoveredColor, setHoveredColor] = useState(new Color('#000000'));
  const canvasRef =  useRef(null);
  const contextRef = useRef(null)
  const imgRef = useRef(null);

  useEffect(()=>{
    canvasRef.current.addEventListener("mousemove", (event) => pick(event));
    contextRef.current = canvasRef.current.getContext("2d");
  },[])

  const pick = (event) =>{
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const bounding = canvas.getBoundingClientRect();
    const x = event.clientX - bounding.left;
    const y = event.clientY - bounding.top;
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    let color = new Color({r:data[0], g:data[1], b: data[2]});
    setHoveredColor(color);
  }
  function drawImage(ctx, img){
      const canv = canvasRef.current;
      canv.width = img.width;
      canv.height = img.height;
      ctx.drawImage(img, 0,0);
  }

  function handleImage(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        var img = new Image();
        img.src = reader.result;
        img.onload = function () {
            imgRef.current = img;
            drawImage(contextRef.current, img);
        }
        
    }
    
  }
  
  const revert =()=>{
    drawImage(contextRef.current, imgRef.current)
  }

  const saturarionChange = () => {
    const cvs = canvasRef.current;
    const ctx = contextRef.current;
    ctx.clearRect(0,0, cvs.width, cvs.height);
    drawImage(ctx, imgRef.current)
    const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const color = new Color({r: data[i], g: data[i + 1], b: data[i + 2]});
      if(color.hue()>=36 && color.hue()<=70){
        const newcolor = color.saturationv(coef);
        data[i] = Math.round(newcolor.red()); // red
        data[i + 1] = Math.round(newcolor.green()); // green
        data[i + 2] = Math.round(newcolor.blue()); // blue
      }
    }
    ctx.putImageData(imageData, 0, 0);
  };

  function saveCanvasImage() {
    const cvs = canvasRef.current
    const link = document.createElement('a');
    link.download = 'convertedImg.png';
    link.href = cvs.toDataURL();
    link.click();
}

  return (
    <PageContainer>
      <MainContentContainer>
        <canvas ref={canvasRef}></canvas>
      </MainContentContainer>
      <SettingsContainer>
          <h1 className='text-xl mb-2 text-center'>Image сolor corection</h1>
          <Range label={'Yellow saturation'} min={0} max={100} value={coef} onChange={setCoef}/>
          <PrimaryButton disable={imgRef.current===null} onClick={saturarionChange}>Correct Color</PrimaryButton>
          <OutlinedButton disable={imgRef.current===null} onClick={revert}>Revert </OutlinedButton>
          <OutlinedButton disable={imgRef.current===null} onClick={saveCanvasImage}>Download</OutlinedButton>
          <input type="file" accept="image/*" onChange={handleImage}/>
          
        <div>
           <h1 className='text-xl mb-2 text-center'>Color converter</h1>
          <ColorConverter color={hoveredColor} onChange={(color)=> setHoveredColor(color)}/>
        </div>
        
      </SettingsContainer>
      
    </PageContainer>
  )
}

export default ColorPage