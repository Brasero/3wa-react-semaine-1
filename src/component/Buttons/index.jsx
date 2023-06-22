import NumberButtons from "../NumberButtons/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";


function Buttons() {

    return (
        <div style={{display: 'flex'}}>
            <NumberButtons />
            <CalcButtons />
        </div>
    )
}

export default Buttons