import Item from "./Item/index.jsx";
import {useContext} from "react";
import {ListContext} from "../../utils/context/ListContext.jsx";


function List() {

    const [state] = useContext(ListContext)

    return (
        <ul>
            {
                state.items.map((item, key) => <Item key={key} value={item} />)
            }
        </ul>
    )
}

export default List