import './App.css'
import Input from "./component/Input/index.jsx";
import CalcButton from "./component/CalcButton/index.jsx";
import {useEffect, useState} from "react";

function App() {

    const normalize = (num) => parseFloat(num.replace(',', '.'))

    const initialState = {
        number1: '',
        number2: ''
    }

    const [values, setValues] = useState(initialState)

    const [resultat, setResultat] = useState(0)
    const [error, setError] = useState('')
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    const changeValue = (event) => {
        const {value, name} = event.target
        const state = {...values}
        //if(name === 'number1') state.number1 = value
        //if(name === 'number2') state.number2 = value
        state[name] = value

        setValues(state)
    }

    const isNumerique = () => {
        if(isNaN(normalize(values.number1)) || isNaN(normalize(values.number2))) {
            setError('Merci de bien saisir des valeurs numérique.')
            return false
        }
        return true
    }

    const addition = () => {
        if(!isNumerique()) {
            return
        }
        const res = normalize(values.number1) + normalize(values.number2)
        setResultat(res)
        setError('')
    }

    const multiply = () => {
        if(!isNumerique()) {
            return
        }
        const res = normalize(values.number1) * normalize(values.number2)
        setResultat(res)
        setError('')
    }

    const reset = () => {
        setResultat(0)
        setValues(initialState)
    }

    useEffect(() => {
        if(resultat !== 0) {

            if(count >= 10) {
                setMessage('Vous avez effectué 10 calculs')
                setCount(0)
            } else {
                setCount(count + 1)
                setMessage('')
            }


        }

    }, [resultat])

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
                <Input value={values.number1} name={'number1'} changeValue={changeValue}/>
                <Input value={values.number2} name={'number2'} changeValue={changeValue} />
            </div>
            {
                error !== '' && <div style={{color: 'red'}}>{error}</div>
            }
            <div style={{display: 'flex'}}>
                <CalcButton value={'+'} click={addition} />
                <CalcButton value={'x'} click={multiply} />
                <CalcButton value={'reset'} click={reset} />
            </div>
        </>
    )
}

export default App
