import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='flex min-h-full'>
        {children}
    </div>
  )
}

export default PageContainer