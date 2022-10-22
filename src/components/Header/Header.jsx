import React from 'react'
import { NavBar } from './NavBar'

export const Header= () => {
  return (
    <div className={'h-16 bg-zinc-700 px-11 flex items-center justify-between text-purple-400'}>
        <h1 className={'text-3xl font-bold'}><a href='/'>MyCoolLogo</a></h1>
        <NavBar/>
    </div>
  )
}
