import React from 'react'

function NotFound() {
  return (
    <div className={' h-full flex items-center justify-center'}>
        <div className={'text-purple-400 text-center flex flex-col gap-3'}>
            <h1 className={'text-9xl  font-bold'}>404</h1>
            <h3 className={'text-4xl'}>Not Found</h3>
            <h6 className={'text-xl'}>The resource request could not be found on this server</h6>
        </div>
    </div>
  )
}

export default NotFound