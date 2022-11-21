import React from 'react'

const Input = ({value, onChange, type, min}) => {
  return (
        <input type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-1
         dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         value={value} onChange ={onChange}
          min={min}
         required/>
  )
}

export default Input