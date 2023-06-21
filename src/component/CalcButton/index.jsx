

function CalcButton({value, click}) {

    return (
        <>
            <button onClick={click}>{value}</button>
        </>
    )
}

export default CalcButton