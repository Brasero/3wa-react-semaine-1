import Buttons from "../Buttons/index.jsx";
import Computer from "../Computer/index.jsx";

function Calculatrice() {



    return (
        <div className={'calculatrice'}>
            <div>
                <div className={'calculatrice__head'}>
                    <Computer />
                </div>
                <div className={'calculatrice__buttons__wrapper'}>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}
export default Calculatrice