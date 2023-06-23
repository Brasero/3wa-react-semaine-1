import {useContext} from "react";
import {OutgoingContext} from "../../../utils/context/OutgoingContext.jsx";
import Item from "./Item/index.jsx";

function List() {

    const [state] = useContext(OutgoingContext)
    const {outgoings} = state

    return (
        <>
            <ul>
                <li style={{
                    borderBottom: '1px solid #cecece',
                    marginBottom: '15px',
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                }}>
                    <span>Detail</span>
                    <span>Montant</span>
                    <span>Catégorie</span>
                </li>
                {
                    outgoings?.map((value, key) => <Item value={value} key={key} /> )
                }
                <li style={{
                    marginTop: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '50px'
                }}>
                    <span>Total</span>
                    <span>{
                        outgoings.length > 0 ?
                            outgoings.reduce((previousValue, currentValue) => {
                                return previousValue + parseFloat(currentValue.amount)
                            }, 0) + ' €'
                            :
                            '0 €'
                    }</span>
                    <span>All</span>
                </li>
            </ul>
        </>
    )
}

export default List