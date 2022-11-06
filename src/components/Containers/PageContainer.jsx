import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='flex h-full'>
        {children}
    </div>
  )
}

export default PageContainer