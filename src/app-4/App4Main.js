import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookCreate from './BookCreate'
import BookList from './BookList'
import './library.css'
import "../App.css"
import { NavLink } from 'react-router-dom';

function App4Main() {
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
