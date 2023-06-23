import './input.css';
import CategorieSelect from "./CategorieSelect/index.jsx";
import {useContext} from "react";
import {OutgoingContext} from "../../utils/context/OutgoingContext.jsx";

function Input() {

    const [state, dispatch] = useContext(OutgoingContext)

    const handleChange = (event) => {
        const {value, name} = event.target
        const action = 'change_outgoing'
        dispatch({type: action, payload: {value, name}})
    }

    const handleClick = () => {
        dispatch({type: 'add_outgoing'})
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <h2>Ajouter une dépense</h2>
            <div className={'input__container'}>
                <div className={'text__inputs'}>
                    <label htmlFor={'name'} className={'input__label'}>
                        <input
                            type="text"
                            id={'name'}
                            name={'detail'}
                            value={state.outgoing.detail}
                            onChange={handleChange}
                            className={'input'}
                            placeholder={"Détail"}
                        />
                        <span>
                        Détail
                    </span>
                    </label>
                    <label htmlFor={'amount'} className={'input__label'}>
                        <input
                            type="text"
                            name={'amount'}
                            value={state.outgoing.amount}
                            onChange={handleChange}
                            className={'input'}
                            placeholder={"0.00"}
                        />
                        <span>
                        Montant
                    </span>
                    </label>
                </div>
                <div className={'categorie__container'}>
                    <CategorieSelect />
                    <button onClick={handleClick} className={'validate__button'}>Valider</button>
                </div>
            </div>
        </div>
    )
}

export default Input