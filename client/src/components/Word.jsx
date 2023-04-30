import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

  const { word, color, bgColor } = useParams();

  return (
    <div>
      {
        isNaN(word) ?
          <h1 className='mt-5' style={color ? { color: color, backgroundColor: bgColor } : null}>The Word is: {word}</h1> :
          <h1 className='mt-5'>The Number is: {word}</h1>


      }
    </div>
  )
}

export default Word