import React from 'react'
import { useParams } from 'react-router-dom'

const ColorWord = () => {

  const { word, color, bgColor } = useParams();

  return (
    <div>
      <h1 className='mt-5' style={color ? { color: color, backgroundColor: bgColor } : null}>This word is: {word}</h1>
    </div >
  )
}

export default ColorWord