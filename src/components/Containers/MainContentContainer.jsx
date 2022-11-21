import React from 'react'

const MainContentContainer = ({children}) => {
  return (
    <div className='w-full h-screen overflow-auto flex justify-center items-center'>
        {children}
  </div>
  )
}

export default MainContentContainer