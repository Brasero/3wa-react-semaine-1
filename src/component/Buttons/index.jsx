import NumberButtons from "../NumberButtons/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";


function Buttons({dispatch}) {

    return (
        <div style={{display: 'flex'}}>
            <NumberButtons dispatch={dispatch} />
            <CalcButtons dispatch={dispatch} />
        </div>
    )
}

export default Buttons