import React from "react";
import Number from "./Number.jsx";

function Wrapper() {

    const numbers = [4,3,7]

    return (
        <>
            {
                numbers.map(num => <Number num={num} />)
            }
        </>
    )
}

export default Wrapper