import './input.css'
import {useContext} from "react";
import {ListContext} from "../../utils/context/ListContext.jsx";
import {apercu} from "../../utils/apercu.js";

function Input() {

    const [state, dispatch] = useContext(ListContext)

    const handleChange = (event) => {
        const {value} = event.target
        dispatch({type: 'changeValue', payload: value})
    }

    //Pour que cette fonction fonctionne on utilisera le type d'action à effectuer en tant que name du select
    // qui l'appel.
    const handleSelectChange = (event) => {
        const {value, name} = event.target
        dispatch({type: name, payload: value})
    }

    return (
        <>
            <div className={'addInput'}>
                <label htmlFor={'text'}>Saisir un message</label>
                <input name={'new'} id={'text'} value={state.item.text} onChange={handleChange} />
            </div>
            <div className={'displayer__input'}>
                <label htmlFor={'color'}>
                    Selectionnez un rendu
                </label>
                <select id={'color'} name={"changeColor"} value={state.item.color} onChange={handleSelectChange}>
                    <option value={'palevioletred'}>Violet rouge pâle</option>
                    <option value={'tomato'}>Tomate</option>
                </select>
                <label htmlFor={'size'}>
                    Taille du
                </label>
                <select id={'size'} name={"changeSize"} value={state.item.size} onChange={handleSelectChange}>
                    <option value={'15px'}>15px</option>
                    <option value={'16px'}>16px</option>
                    <option value={'17px'}>17px</option>
                    <option value={'18px'}>18px</option>
                    <option value={'19px'}>19px</option>
                    <option value={'20px'}>20px</option>
                </select>
                <button onClick={()=> dispatch({type: 'addItem'})}>Valider</button>

            </div>
            <div className={'apercu'}>
                <span style={apercu(state.item.size, state.item.color)}>{state.item.text}</span>
            </div>
        </>
    )
}

export default Input