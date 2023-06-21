import './App.css'
import {useReducer} from "react";

//Un reducer est une fonction qui prend en argument un state et une action et qui nous renvoi un nouveau state
const reducer = (state, action) => {
    switch(action.type) {

        case 'increment' :
            return {count: state.count + (action.payload || 1), click: state.click +1}

        case 'decrement' :
            return {count:state.count -1, click: state.click +1}

        case 'reset':
            return init({count:0, click:0})

        default:
            throw new Error('le type ' + action.type + ' est inconnu')
    }
}

const init = (initialState) => {
    return {
        count: initialState.count+10,
        click: 0
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count: 0, click: 0}, init)

    return (
        <>
            compteur : {state.count}

            nombre de click : {state.click}
            <button onClick={() => dispatch({type: 'increment'})}>Incrément</button>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Incrément + 10</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}

export default App
