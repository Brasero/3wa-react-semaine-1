import './calcButton.css'


function CalcButtons({dispatch}) {

    return (
        <div className={'calcButton'}>
            <button onClick={() => dispatch({type: 'addition'})}>+</button>
            <button onClick={() => dispatch({type: 'multiply'})}>x</button>
            <button onClick={() => dispatch({type: 'equal'})}>=</button>
            <button onClick={() => dispatch({type: 'reset'})}>c</button>
        </div>
    )
}

export default CalcButtons