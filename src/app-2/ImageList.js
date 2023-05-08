import React from 'react'
import ImageShow from './ImageShow'
import './app-2.css'

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className='imageListMain'>
        {renderedImages}
    </div>
  )
}

export default ImageList
