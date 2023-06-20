import {useState, useEffect} from "react";

function Chrono({step, limit = 20}) {

    const [chrono, setChrono] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [message, setMessage] = useState("")


    const start = () => {
        //sécurité
        clearInterval(intervalId)
        if (chrono >= limit) {
            setMessage("La limite à été atteinte merci de remettre le chrono à 0")
            return
        }
        const id = setInterval(() => {
            setChrono(chrono => chrono + step)
            console.log(chrono)
        }, 1000)
        setDisabled(true)
        setIntervalId(id)
    }

    const stop = () => {
        clearInterval(intervalId)
        setDisabled(false)
    }

    const reset = () => {
        stop()
        setChrono(0)
        setMessage('')
    }

    useEffect(() => {
        if(chrono >= limit) {
            stop()
        }

    }, [chrono])

    return (
        <div>
            <div>{chrono}</div>
            <div style={{
                display: 'flex',
                gap: '5px'
            }} >
                <button disabled={disabled} onClick={start}>Start (+{step})</button>
                <button disabled={!disabled} onClick={stop}>Stop</button>
                {
                    chrono > 0 && <button onClick={reset}>Reset</button>
                }
            </div>
            {
                message !== '' && <span style={{color: "red"}}>{message}</span>
            }
        </div>
    )
}

export default Chrono