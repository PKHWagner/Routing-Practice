import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

  const { word } = useParams();

  return (
    <div>
      {
        isNaN(word) ?
          <h1 className='mt-5'>{word}</h1> :
          <h1 className='mt-5'>The Number is: {word}</h1>


      }
    </div>
  )
}

export default Word