import {useContext} from "react";
import {OutgoingContext} from "../../../utils/context/OutgoingContext.jsx";


function TotalCategory() {

    const [state] = useContext(OutgoingContext)
    const {category, outgoings} = state

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h3>Total par catégories</h3>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {
                        category.map((category, key) => {
                            return (
                                <tr key={key} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid #cecece',
                                    marginBottom: '5px'
                                }}>
                                    <td style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <span>
                                            {category}
                                        </span>
                                    </td>
                                    <td style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}>
                                        {
                                            outgoings.reduce((prev, current) => {
                                                return current.category === category ? prev + parseFloat(current.amount)
                                                    :
                                                    prev + 0
                                            }, 0) + ' €'
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TotalCategory