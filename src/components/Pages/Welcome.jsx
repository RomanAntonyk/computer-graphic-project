import React from 'react'
import { HeaderNavButton } from '../Header/HeaderNavButton'

const Welcome = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <div className='flex flex-col items-center gap-2 text-purple-400'>
            <h1 className={'text-4xl font-bold'}><a href='/'>MyCoolLogo</a></h1>
            <HeaderNavButton path={'/fractal'} text={'Fractal'}/>
            <HeaderNavButton path={'/color'} text={'Color'}/>
            <HeaderNavButton path={'/transformation'} text={'Transformation'}/>
            <HeaderNavButton path={'/help'} text={'Help'}/>
        </div>
    </div>
  )
}

export default Welcome