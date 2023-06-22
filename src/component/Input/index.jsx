import {useContext} from "react";
import {ListContext} from "../../utils/context/ListContext.jsx";


function Input() {

    const [state, dispatch] = useContext(ListContext)

    const handleChange = (event) => {
        const {value} = event.target
        dispatch({type: 'changeValue', payload: value})
    }

    return (
        <>
            <input name={'new'} value={state.value} onChange={handleChange} />
            <button onClick={()=> dispatch({type: 'addItem'})}>Valider</button>
        </>
    )
}

export default Input