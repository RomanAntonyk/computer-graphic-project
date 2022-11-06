import React from 'react'

const MainContentContainer = ({children}) => {
  return (
    <div className='w-full flex justify-center items-center'>
        {children}
  </div>
  )
}

export default MainContentContainer