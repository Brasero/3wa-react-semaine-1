import './App.css'
import Counter from "./Counter.jsx";

function App() {

    return (
        <>
            <Counter step={1} />
            <Counter step={3} />
            <Counter step={6} />
        </>
    )
}

export default App
