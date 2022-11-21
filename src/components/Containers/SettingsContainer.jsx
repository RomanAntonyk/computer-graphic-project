import React from 'react'

function SettingsContainer({ children }) {
  return (
    <div className={'w-96 flex flex-col gap-2 border-slate-500 border-l-2 p-1'}>
      {children}
    </div>
  )
}

export default SettingsContainer