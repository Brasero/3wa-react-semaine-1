import {useContext} from "react";
import {ListContext} from "../../../utils/context/ListContext.jsx";

function Item({value}) {

    const [state, dispatch] = useContext(ListContext)

    return (
        <>
            <li>
                {value}
                <button onClick={() => dispatch({type: 'removeItem', payload: value})}>X</button>
            </li>
        </>
    )
}

export default Item