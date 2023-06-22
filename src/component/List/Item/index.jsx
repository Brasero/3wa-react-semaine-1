import './item.css'
import {useContext} from "react";
import {ListContext} from "../../../utils/context/ListContext.jsx";
import {apercu} from "../../../utils/apercu.js";

function Item({value}) {

    const [state, dispatch] = useContext(ListContext)

    return (
        <>
            <li>
                <span style={apercu(value.size, value.color)}>{value.text}</span>
                <button onClick={() => dispatch({type: 'removeItem', payload: value})}>X</button>
            </li>
        </>
    )
}

export default Item