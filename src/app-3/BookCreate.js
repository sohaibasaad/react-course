import React, {useState} from 'react'

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form className='' onSubmit={handleSubmit}>
        <label className='' htmlFor="addBook">Title</label>
        <input type="text" id='addBook' 
          value={title}
          className='input'
          onChange={handleChange}
        />
        <button className='button'>Add Book</button>
      </form>
    </div>
  )
}

export default BookCreate
