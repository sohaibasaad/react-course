import React from 'react';

function ImageList({ images }) {
  const [selectedName, setSelectedName] = useState('');
 
  const handleClick = (name) => {
    setSelectedName(name);
  };

  const renderedImages = images.map((image, index) => {
    console.log(image.name)
    return (
      <img key={image.id} src={image.src} onClick={() => handleClick(image.name)}/>
    );
  });

  return (
    <div>
      <h1>Image name: {selectedName}</h1>
      <div>
        {renderedImages}
      </div>
    </div>
  );
}

const useState = React.useState;
// Don't change the export
export { ImageList };