import React, { useState } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'
import './library.css'
import "../App.css"
import { NavLink } from 'react-router-dom';

function App3Main() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: (books.length), title }
    ]
    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

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
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  )
}

export default App3Main
