import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
        autoFocus
        type="text"
        placeholder="Add color name"
        require
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)} 
    />
    </form>
  )
}

export default Input