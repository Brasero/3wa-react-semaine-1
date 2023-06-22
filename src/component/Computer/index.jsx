import './computer.css'
import {useContext} from "react";
import {CalculatorContext} from "../../utils/context/CalculatorContext.jsx";

function Computer() {

    const [state] = useContext(CalculatorContext)
    const value = state.currentNumber
    console.log(state)

    return (
        <div className={'computer__wrapper'}>
            <span className={'computer__value'}>
                {value}
            </span>
        </div>
    )
}

export default Computer