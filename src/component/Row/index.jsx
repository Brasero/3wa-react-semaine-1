import Square from "../Square/index.jsx";

function Row({rowNumber, values, click}) {



    return (
        <div className={'row'} style={{display: 'flex'}}>
            <Square
                position={(rowNumber * 3) + 1 }
                value={values[((rowNumber * 3) + 1) - 1]}
                click={click}
            />
            <Square
                position={(rowNumber * 3) + 2 }
                value={values[((rowNumber * 3) + 2) - 1]}
                click={click}
            />
            <Square
                position={(rowNumber * 3) + 3 }
                value={values[((rowNumber * 3) + 3) - 1]}
                click={click}
            />
        </div>
    )
}

export default Row