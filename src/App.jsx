import './App.css'
import Counter from "./Counter.jsx";

import Chrono from "./Chrono.jsx";

function App() {

    return (
        <>
            {
                /*
                <Counter step={1}/>
                <Counter step={3} />
                <Counter step={6} />
             */
            }

            <Chrono step={1} />
            <Chrono step={2} />
        </>
    )
}

export default App
