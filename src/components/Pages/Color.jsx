import React, { useRef, useState } from 'react'
import ColorConverter from '../ColorConverter/ColorConverter'
import PrimaryButton from '../UI/PrimaryButton'
import OutlinedButton from '../UI/OutlinedButton'
import Range from '../UI/Range'
import Color from 'color'

function ColorPage() {
  const[coef, setCoef] = useState(0);
  const canvas =  useRef();
  const imgRef = useRef(null);

  function drawImage(ctx, img){
      const canv = canvas.current;
      canv.width = img.width;
      canv.height = img.height;
      ctx.drawImage(img, 0,0);
  }

  function handleImage(e) {
    var reader = new FileReader();
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    reader.onload = function (event) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function () {
            imgRef.current = img;
            drawImage(ctx, img);
            
        }
        
    }

    reader.readAsDataURL(e.target.files[0]);
  }
  
  const revert =()=>{
    drawImage(canvas.current.getContext('2d'), imgRef.current)
  }

  const saturarionChange = () => {
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");
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
    const cvs = canvas.current
    const link = document.createElement('a');
    link.download = 'convertedImg.png';
    link.href = cvs.toDataURL();
    link.click();
}

  return (
    <div className='flex h-full'>
      <div className='w-full flex justify-center items-center'>
        <canvas ref={canvas}></canvas>
      </div>
      <div className={'w-96 flex flex-col gap-6 border-slate-500 border-l-2 px-1 h-full'} >
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl mb-2 text-center'>Image сolor corection</h1>
          <Range label={'Yellow saturation'} min={0} max={100} value={coef} onChange={setCoef}/>
          <PrimaryButton className = 'w-full' disable={imgRef.current===null} onClick={saturarionChange}>Correct Color</PrimaryButton>
          <OutlinedButton className = 'w-full' disable={imgRef.current===null} onClick={revert}>Revert </OutlinedButton>
          <OutlinedButton className = 'w-full' disable={imgRef.current===null} onClick={saveCanvasImage}>Download</OutlinedButton>
          <input type="file" accept="image/*" onChange={handleImage}/>
          
        </div>
        <div>
           <h1 className='text-xl mb-2 text-center'>Color converter</h1>
          <ColorConverter/>
        </div>
        
      </div>
      
    </div>
  )
}

export default ColorPage