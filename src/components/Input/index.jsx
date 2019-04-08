import React from 'react'

const Input = ({ onChange, ...otherProps }) => {
  const handleChange = (event) => {
    const value = event.target.value

    onChange(value)
  }

  return (
    <input {...otherProps} onChange={handleChange} />
  )
}

export default Input
