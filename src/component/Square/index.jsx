import './style.css'
import {useState} from "react";

function Square({position, value, click}) {



    return (
        <button
            className='square'
            value={position}
            onClick={() => click(position - 1)}
        >
            {value}
        </button>
    )
}

export default Square