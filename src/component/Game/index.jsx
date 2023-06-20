import Row from "../Row/index.jsx";
import {useState} from 'react'

function Game() {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState(false)
    const [message, setMessage] = useState('First player : O')

    const onClick = (index) => {
        const newSquares = squares

        if(squares[index] !== '' || winner(squares)) {
            return
        }

        if(player) {
            newSquares[index] = "X"
        } else {
            newSquares[index] = "O"
        }

        setPlayer(!player)
        setSquares({
            ...newSquares
        })

        const theWinner = winner(newSquares)
        if(theWinner) {
            setMessage(`The winner is : ${theWinner}`)
        } else {
            setMessage(`Next player is : ${player ? 'O' : 'X'}`)
        }
    }

    const winner = (squares) => {
        const winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i= 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i]
            if (squares[a] !== "" && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    return (
        <>
            {message}
            <div className={'game'}>
                <Row rowNumber={0} values={squares} click={onClick} />
                <Row rowNumber={1} values={squares} click={onClick} />
                <Row rowNumber={2} values={squares} click={onClick} />
            </div>
        </>
    )
}

export default Game