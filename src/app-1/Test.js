import React, { useState } from 'react'
import TestShow from './TestShow';
import "../App.css"
import { NavLink } from 'react-router-dom';


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function Test() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const showList = animals.map((animal, index) => {
        return <TestShow type={animal} key={index} />
    });
    return (
        <>
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

            <div style={{
                textAlign: "center"
            }}>
                <button onClick={handleClick} style={{
                    backgroundColor: "#ccc",
                    padding: "10px",
                    borderRadius: "10px",
                    outline: "none",
                    border: "1px solid #ccc",
                    textAlign: "center",
                    margin: "20px auto",
                    cursor: 'pointer',
                }}>Click Event</button>
                <div>
                    <ul style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>

                        {showList}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Test
