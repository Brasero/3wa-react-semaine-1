import React from "react";

function Map(props) {

    const { numbers } = props


    return (
        <>
            {
                numbers.map(num => <h1>{num}</h1>)
            }
        </>
    )
}

export default Map