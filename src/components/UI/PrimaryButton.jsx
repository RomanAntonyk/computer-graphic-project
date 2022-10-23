import React from 'react'

const PrimaryButton = ({onClick, children, className, ...props}) => {
  return (
    <button onClick={onClick} className={'bg-purple-600 hover:bg-purple-700 p-2 rounded-md '.concat(className)}>
        {children}
    </button>
  )
}

export default PrimaryButton
