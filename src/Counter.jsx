import React, {useState, useEffect} from "react";
import Number from "./Number.jsx";

function Counter({step}) {

    const initialMessage = 'Attention il n\'est pas possible de décrémenter'

    const [state, setState] = useState({
        counter: 0,
        disabled: true,
        message: initialMessage
    })

    const handlePlus = () => {
        // setCounter(counter + step)
        // setDisabled(false)
        // setMessage('')
        setState({
            counter: state.counter + step,
            disabled: false,
            message: ''
        })
    }

    const handleMoins = () => {
        //setCounter(counter - step)

        setState({
            ...state,
            counter: state.counter - step
        })
    }

    useEffect(() => {
        if (state.counter === 0) {
            //setDisabled(true)
            //setMessage(initialMessage)
            setState({
                ...state,
                disabled: true,
                message: initialMessage
            })
        }
    }, [state.counter])

    return (
        <>
            <Number num={state.counter}/>
            <button onClick={handlePlus}>Incrémenté de {step}</button>
            <button disabled={state.disabled} onClick={handleMoins}>Décrémenté de {step}</button>
            {
                state.message !== '' && <div>{state.message}</div>
            }
        </>
    )
}

export default Counter