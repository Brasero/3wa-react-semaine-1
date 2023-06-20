import {useEffect, useState} from 'react'
import Board from "../Board/index.jsx";
import GameHistory from "../GameHistory/index.jsx";

function Game() {


    const initialState = [Array(9).fill('')]
    const [squaresHistory, setSquaresHistory] = useState(initialState)
    const [selectedMove, setSelectedMove] = useState(0)
    const squares =  squaresHistory[selectedMove]
    const player = selectedMove % 2 !== 0
    const [message, setMessage] = useState('First player : O')

    const onClick = (index) => {
        const newSquares = squares.slice()

        if(squares[index] !== '' || winner(squares)) {
            return
        }
        if(player) {
            newSquares[index] = "X"
        } else {
            newSquares[index] = "O"
        }

        if(selectedMove && selectedMove !== squaresHistory.length){
            const newHistory = squaresHistory.slice(0, selectedMove + 1)
            setSquaresHistory([
                ...newHistory,
                newSquares
            ])
        } else {
            setSquaresHistory([
                ...squaresHistory,
                newSquares
            ])
        }


        setSelectedMove(selectedMove + 1)
    }

    useEffect(() => {
        const theWinner = winner(squares)
        if(theWinner) {
            setMessage(`The winner is : ${theWinner}`)
        } else if(squares.includes('')) {
            setMessage(`Next player is : ${player ? 'X' : 'O'}`)
        } else {
            setMessage("The game is null no one wins")
        }
    }, [selectedMove])

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

    const jumpTo = (index) => {
        if(index === 0) {
            setSquaresHistory(initialState)
        }
        setSelectedMove(index)
    }

    return (
        <>
            <div className={'gameContainer'}>
                <div className={'gameHeader'}>
                    {message}
                </div>
                <div className={'gameContainer__block'} style={{display: 'flex'}}>
                    <div className={"boardContainer"}>
                        <Board squares={squares} click={onClick}/>
                    </div>
                    <div className={'historyContainer'}>
                        <GameHistory history={squaresHistory} click={jumpTo} />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Game