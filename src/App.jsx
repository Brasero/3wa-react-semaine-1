import './App.css'
import Input from "./component/Input/index.jsx";
import Computing from "./component/Computing/index.jsx";


function App() {


    return (
        <>
            <div className="App">
                <div>
                    <h1>
                        Mes dépenses
                    </h1>
                </div>
                <div className={'input__container'}>
                    <Input />
                </div>
                <div className={'all_outgoings'}>
                    <Computing />
                </div>
            </div>
        </>
    )
}

export default App
