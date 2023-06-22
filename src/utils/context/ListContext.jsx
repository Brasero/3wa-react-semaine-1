import {createContext, useReducer} from "react";
import reducer, {initialState} from "../../reducer/index.jsx";


export const ListContext = createContext()

const ListContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ListContext.Provider value={[state, dispatch]}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider