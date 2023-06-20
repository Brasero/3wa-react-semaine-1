import './App.css'
import {useState, useEffect} from 'react'

function App() {

    const [state, setState] = useState({
        list: [
            'bananes',
            'fraise',
            'fromage'
        ],
        button: [
            'Lait',
            'Eau',
            'Café'
        ],
        click: -1
    })

    const toggleCart = (item) => {
        const {list, button} = state
        if (list.includes(item)) {
            const newList = list.filter((li) => li !== item)
            button.push(item)
            setState({
                ...state,
                list: newList,
                button
            })
        } else {
            const newButton = button.filter((button) => button !== item)
            list.push(item)
            setState({
                ...state,
                button: newButton,
                list
            })
        }
    }

    useEffect(() => {
        setState({
           ...state,
            click: state.click + 1
        })

        //Fonction de nettoyage qui sera appelé au moment où le component démonte (unmount)
        //return () => {
          //  console.log('je démonte')
        //}
    }, [state.list, state.button])

    return (
        <>
            <div>
                {
                    state.button.map((item,key) => {
                        return (
                            <button
                                key={key}
                                onClick={() => toggleCart(item)}
                            >
                                {item}
                            </button>)
                    })
                }
            </div>
            <ul>
                {
                    state.list.map((item, key) => {
                        return (
                            <li key={key}>
                                {item}
                                <button
                                    style={{background: 'red'}}
                                    onClick={() => toggleCart(item)}
                                >X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App
