import React, { useState } from 'react'
import './app-2.css'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    // const inputValue = useRef();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    className='searchBarInput' 
                    placeholder='Search Here'
                    value={term}
                    // ref={inputValue}
                    onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar