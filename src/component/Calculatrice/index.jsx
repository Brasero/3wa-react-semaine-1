import Buttons from "../Buttons/index.jsx";
import Computer from "../Computer/index.jsx";
import {useReducer} from "react";
import reducer, {initialState} from "../../reducer/index.jsx";

function Calculatrice() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className={'calculatrice'}>
            <div>
                <div className={'calculatrice__head'}>
                    <Computer value={state.currentNumber} />
                </div>
                <div className={'calculatrice__buttons__wrapper'}>
                    <Buttons dispatch={dispatch} />
                </div>
            </div>
        </div>
    )
}
export default Calculatrice