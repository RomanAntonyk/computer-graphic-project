import React from 'react'


const TextField =({
    error,
    label,
    disabled,
    onChange,
    placeholder,
    readOnly,
    type,
    value,
    helperText
  }) => {
    
    return (
        <>
        {label ? <label for="success" class="block mb-2 text-sm font-medium">{label}</label> : ''} 
        <input className={'bg-zinc-600 border border-zinc-400 rounded-sm '.concat(error ? 'border-red-400' : '')}
            tabIndex={0}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
          />
        {(error && helperText) ? <p className={'text-red-400 text-sm'}>{helperText}</p> : ''}
        </>
          
    );
  };
  
  
  export default TextField;
  