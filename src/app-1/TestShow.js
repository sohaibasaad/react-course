import React, { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function TestShow({ type }) {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div onClick={handleClick} style={{
            // border: "1px solid #ccc",
            width: "25%",
            height: "250px",
            margin: "15px",
            position: "relative",
            boxShadow: "rgb(204, 204, 204) 0px 0px 5px 2px",
            padding: "25px",
            borderRadius: "15px",
            cursor: 'pointer',
        }}>
            <img src={svgMap[type]} style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"

            }} alt="animal" />
            <img src={heart} alt="heart"
                style={{
                    width: 10 + 10 * clicks + 'px',
                    maxWidth: "60px",
                    position: 'absolute',
                    right: "10px",
                    bottom: "10px",
                }} />
        </div>
    )
}

export default TestShow
