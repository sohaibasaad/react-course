import React from 'react'
import './app-2.css'

function ImageShow({ image }) {
  return (
      <div className='imageBox'>
        <img src={image.urls.small} alt={image.alt_description}/>
      </div>
  )
}

export default ImageShow
