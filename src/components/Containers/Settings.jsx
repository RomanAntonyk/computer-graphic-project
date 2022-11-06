import React from 'react'

const Settings = ({children}) => {
  return (
    <div className={'w-96 flex flex-col gap-6 border-slate-500 border-l-2 px-1 h-full'} >
        {children}
    </div>
  )
}

export default Settings