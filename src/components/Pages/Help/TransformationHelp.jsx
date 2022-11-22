import React from 'react'

const TransformationHelp = () => {
  return (
    <>
        <iframe className='m-auto' width="600" height="500" src="https://www.youtube.com/embed/E3Phj6J287o" title="What are affine transformations?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 className='text-2xl text-purple-400 text-center'>Афінне перетворення</h1>
        <p>
        Найбільш часто в комп’ютерній графіці для перетворення об’єктів використовуються, так зване афінне
        перетворення (affine transforma-tions). Перетворення площини (зображення) називається афінним, якщо воно
        взаємно однозначно і відображенням будь-якої прямої є пряма. Взаємно однозначне перетворення переводить
        кожну точку площини (зображення) Р в іншу точку площині (зображення) Р’, таким чином, що кожній точці P
        відповідає якась точка P’. Крім повороту, відображення, стиснення і розтягування (все це підгрупи афінних
        перетворень) геометричних об’єктів, здійснює ще зрушення їх у просторі (іноді кажуть, трансляцію)
        </p>
        <img src={require('./img/affine.jpg')} alt="fractal" width={600} height={800} className='m-auto mt-2'/>


    </>
  )
}

export default TransformationHelp