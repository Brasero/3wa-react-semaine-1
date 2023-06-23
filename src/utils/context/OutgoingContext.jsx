import {createContext, useReducer} from "react";
import reducer, {initialState} from "../../reducer/index.jsx";


export const OutgoingContext = createContext();


const OutgoingContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <OutgoingContext.Provider value={[state, dispatch]}>
            {children}
        </OutgoingContext.Provider>
    )
}

export default OutgoingContextProvider