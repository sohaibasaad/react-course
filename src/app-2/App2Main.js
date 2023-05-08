import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import searchImages from './SearchApi'
import "../App.css"
import { NavLink } from 'react-router-dom';

function App2Main() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div>
      <div className='header'>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/app-1">App 1</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/app-2">App 2</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/app-3">App 3</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/app-4">App 4</NavLink>
          </li>
        </ul>
      </div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App2Main
