import {createContext, useReducer} from "react";
import reducer, {initialState} from "../../reducer/index.jsx";

export const CalculatorContext = createContext()

const CalculatorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CalculatorContext.Provider value={[state, dispatch]}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorContextProvider