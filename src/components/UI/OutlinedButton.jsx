import React from 'react'

const OutlinedButton = ({onClick, children, className, ...props}) => {
  return (
    <button props onClick={onClick} className={'border-purple-600 hover:bg-purple-700 p-2 rounded-md border-2 '.concat(className)}>
        {children}
    </button>
  )
}

export default OutlinedButton