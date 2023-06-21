import './App.css'
import Input from "./component/Input/index.jsx";
import CalcButton from "./component/CalcButton/index.jsx";
import {useEffect, useState, useReducer} from "react";
import reducer, {initialState} from "./reducer/index.jsx";

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    const {values, count, message, error, resultat} = state
    const {number1, number2} = values
    const changeValue = (event) => {
        const {value, name} = event.target
        const payload = {name, value}
        dispatch({type: 'changeValue', payload})
    }

    useEffect(() => {
        if(state.resultat !== 0) {

            if(count >= 10) {
                dispatch({type: 'setMessage', payload: 'Vous avez fait 10 calcul'})
                console.log(count, message)
            } else {
                dispatch({type: 'setCount'})
            }


        }

    }, [state.resultat])

    return (
        <>
            {
                message !== '' &&
                <span style={{color: 'green'}}>
                    {message}
                </span>
            }
            <div style={{marginBottom: '20px'}}>
                {resultat}
            </div>
            <div style={{display: 'flex'}}>
                <Input value={number1} name={'number1'} changeValue={changeValue}/>
                <Input value={number2} name={'number2'} changeValue={changeValue} />
            </div>
            {
                error !== '' && <div style={{color: 'red'}}>{error}</div>
            }
            <div style={{display: 'flex'}}>
                <CalcButton value={'+'} click={() => dispatch({type: 'addition'})} />
                <CalcButton value={'x'} click={() => dispatch({type: 'multiply'})} />
                <CalcButton value={'reset'} click={() => dispatch({type: 'reset'})} />
            </div>
        </>
    )
}

export default App
