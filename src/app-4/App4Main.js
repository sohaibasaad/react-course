import React, { useEffect, useContext } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'
import './library.css'
import "../App.css"
import { NavLink } from 'react-router-dom';
import BooksContext from './context/books'

function App4Main() {

  const {fetchBooks} = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
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
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App4Main
