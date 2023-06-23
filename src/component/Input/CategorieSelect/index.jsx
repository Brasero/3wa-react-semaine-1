import './categorieselect.css'
import {useContext} from "react";
import {OutgoingContext} from "../../../utils/context/OutgoingContext.jsx";


function CategorieSelect() {

    const [state, dispatch] = useContext(OutgoingContext)
    const {category} = state

    const handleChange = (event) => {
        const {value} = event.target
        dispatch({type: 'change_category', payload: value})
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <label htmlFor={'select'}>
                Catégorie
            </label>
            <select
                value={state.outgoing.category}
                className={'select__input'}
                onChange={handleChange}
                id={'select'}
            >
                {
                    category.map((cat, key) => <option key={key} value={cat}>{cat}</option>)
                }
            </select>
        </div>
    )
}

export default CategorieSelect