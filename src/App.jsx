import './App.css'
import Calculatrice from "./component/Calculatrice/index.jsx";
import CalculatorContextProvider from "./utils/context/CalculatorContext";


function App() {


    return (
        <CalculatorContextProvider>
            <Calculatrice />
        </CalculatorContextProvider>
    )
}

export default App
