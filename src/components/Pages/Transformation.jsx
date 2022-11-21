import React, { useRef } from 'react'
import PageContainer from '../Containers/PageContainer'
import MainContentContainer from '../Containers/MainContentContainer'
import SettingsContainer from '../Containers/SettingsContainer'
import JXG from 'jsxgraph'
import { useEffect } from 'react'
import Input from '../UI/Input'
import { useState } from 'react'
import PrimaryButton from '../UI/PrimaryButton'
import OutlinedButton from '../UI/OutlinedButton'

const Transformation = () => 
{
    const [x1, setX1] = useState(8);
    const [y1, setY1] = useState(1);
    const [x2, setX2] = useState(7);
    const [y2, setY2] = useState(3);
    const [x3, setX3] = useState(6);
    const [y3, setY3] = useState(2);

    const[scale, setScale] = useState(2);  
    const[step, setStep] = useState(2);

    const PointA = useRef();
    const PointB = useRef();
    const PointC = useRef();
    const Board = useRef();

    useEffect(()=>{
         var brd = JXG.JSXGraph.initBoard("affineCanvas", {
            //maxboundingbox: [-500, 500, 500, -500],
            boundingbox: [-8, 8, 8, -8],
            zoom: {
                enabled: true,
                factorX: 1.25,
                factorY: 1.25,
                wheel: true,
                needShift: false,
                pinchHorizontal: true,
                pinchVertical: true,
                pinchSensitivity: 7,
            },
            pan: {
                needShift: false,
                needTwoFingers: false,
                enabled: true,
            },
            
        });   

         brd.create('axis', [[0,0],[0,1]], {
            ticks: {
                drawLabels: true,
                strokeColor: 'white',
                label: {
                    offset: [-4, -15],
                    strokeColor: 'white'
                }
            }
        }); 

        brd.create('axis', [[0,0],[1,0]], {
            ticks: {
                drawLabels: true,
                strokeColor: 'white',
                label: {
                    offset: [-4, -15],
                    strokeColor: 'white'
                }
            }
        });

        var p1 = brd.create('point', [x1, y1]);
        var p2 = brd.create('point', [x2, y2]);
        var p3 = brd.create('point', [x3, y3]);
        Board.current = brd;
        PointA.current = p1;
        PointB.current = p2;
        PointC.current = p3;
        brd.create('polygon', [p1, p2, p3]);
    }, []);

    useEffect(()=>{
        PointA.current.setPosition(JXG.COORDS_BY_USER, [x1, y1])
        PointB.current.setPosition(JXG.COORDS_BY_USER, [x2, y2])
        PointC.current.setPosition(JXG.COORDS_BY_USER, [x3, y3])
        Board.current.update();
    },[x1, x2, x3, y1, y2, y3])

    const multiplyMatrices = (a, b) => {
        if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
           throw new Error('arguments should be in 2-dimensional array format');
        }
        let x = a.length,
        z = a[0].length,
        y = b[0].length;
        if (b.length !== z) {
           // XxZ & ZxY => XxY
           throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
        }
        let productRow = Array.apply(null, new
        Array(y)).map(Number.prototype.valueOf, 0);
        let product = new Array(x);
        for (let p = 0; p < x; p++) {
           product[p] = productRow.slice();
        }
        for (let i = 0; i < x; i++) {
           for (let j = 0; j < y; j++) {
              for (let k = 0; k < z; k++) {
                 product[i][j] += a[i][k] * b[k][j];
              }
           }
        }
        return product; 
     
    };

    const getMoveMatrix = ()=>{
        return [
            [1, 0, 0],
            [0, 1, 0],
            [step, step, 1]
        ]
    }

    const getScaleMatrix = ()=>{
        return[
            [scale, 0, 0],
            [0, scale, 0],
            [0, 0, 1]
        ]
    }

    const getTriangleMatrix = () =>{
        return[
            [x1, y1, 1],
            [x2, y2, 1],
            [x3, y3, 1]
        ]
    }

    const complexTransform = ()=>{
       let res = multiplyMatrices(getTriangleMatrix(), getMoveMatrix());
       let fres = multiplyMatrices(res, getScaleMatrix());
       setCoordsFromMatrix(fres)
    }

    const moveTransform = ()=>{
        let res = multiplyMatrices(getTriangleMatrix(), getMoveMatrix());
        setCoordsFromMatrix(res);
    }

    const scaleTransform = ()=>{
        let res = multiplyMatrices(getTriangleMatrix(), getScaleMatrix());
        setCoordsFromMatrix(res);
    }

    const setCoordsFromMatrix = (triangleMatrix) =>{
        setX1(triangleMatrix[0][0]);
        setY1(triangleMatrix[0][1]);
        setX2(triangleMatrix[1][0]);
        setY2(triangleMatrix[1][1]);
        setX3(triangleMatrix[2][0]);
        setY3(triangleMatrix[2][1]);
    }
  return (
    <PageContainer>
        <MainContentContainer>
        <div id="affineCanvas" className="affineCanvas w-full h-screen"></div>
        </MainContentContainer>
        <SettingsContainer>
                <h1 className='text-xl mb-2 text-center'>Triangle Vertexes</h1>
                <div className='flex gap-2 items-center'>
                    <label>A:</label>
                    <label>X</label>
                    <Input value={Math.round(x1 * 100) / 100 } onChange={e=>{setX1(parseFloat(e.target.value))}} type={"number"}/>
                    <label>Y</label>
                    <Input value={Math.round(y1 * 100) / 100} onChange={e=>{setY1(parseFloat(e.target.value))}} type={"number"}/>
                </div>
                <div className='flex gap-2 items-center'>
                    <label>B:</label>
                    <label>X</label>
                    <Input value={Math.round(x2 * 100) / 100} onChange={e=>{setX2(parseFloat(e.target.value))}} type={"number"}/>
                    <label>Y</label>
                    <Input value={Math.round(y2 * 100) / 100} onChange={e=>{setY2(parseFloat(e.target.value))}} type={"number"}/>
                </div>
                <div className='flex gap-2 items-center'>
                    <label>C:</label>
                    <label>X</label>
                    <Input value={Math.round(x3 * 100) / 100} onChange={e=>{setX3(parseFloat(e.target.value))}} type={"number"}/>
                    <label>Y</label>
                    <Input value={Math.round(y3 * 100) / 100} onChange={e=>{setY3(parseFloat(e.target.value))}} type={"number"}/>
                </div>
                <label>Scale:</label>
                <Input value={scale} onChange={e=>{setScale(parseFloat(e.target.value))}} type={"number"}/>
                <label>Move step:</label>
                <Input value={step} onChange={e=>{setStep(parseFloat(e.target.value))}} type={"number"}/>
                <PrimaryButton onClick={complexTransform}>Complex Transform</PrimaryButton>
                <OutlinedButton onClick={moveTransform}>Move</OutlinedButton>
                <OutlinedButton onClick={scaleTransform}>Scale</OutlinedButton>
        </SettingsContainer>
    </PageContainer>
  )
}

export default Transformation