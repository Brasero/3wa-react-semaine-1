import './computing.css'
import List from "./List/index.jsx";
import TotalCategory from "./TotalCategory/index.jsx";

function Computing() {

    return (
        <div className={'computer__wrapper'}>
            <div>
                <List />
            </div>
            <div>
                <TotalCategory />
            </div>
        </div>
    )
}

export default Computing