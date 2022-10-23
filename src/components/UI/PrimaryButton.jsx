import React from 'react'

const PrimaryButton = ({onClick, children, className, disable, ...props}) => {
  return (
    <button onClick={onClick} disabled={disable} className={'bg-purple-600 hover:bg-purple-700 p-2 rounded-md '.concat(className)}>
        {children}
    </button>
  )
}

export default PrimaryButton
