import React from 'react'
import { ImageList } from './ImageList';

const images = [
  {id: 'a', name: 'Leaf', src: 'https://picsum.photos/seed/abd/200/300' },
  {id: 'b', name: 'House', src: 'https://picsum.photos/seed/gqk/200/300' },
  {id: 'c', name: 'Tree', src: 'https://picsum.photos/seed/ias/200/300' },
];


function App1Main() {
  return (
    <div>
        <ImageList images={images} />
    </div>
  )
}

export default App1Main
