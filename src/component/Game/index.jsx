import {useEffect, useState} from 'react'
import Board from "../Board/index.jsx";
import GameHistory from "../GameHistory/index.jsx";

function Game() {

    //Définition de la valeur state initiale de l'historique de notre application
    //On utilise une constante à part pour le définir afin d'éviter les répétitions lorsqu'on en aura besoin de nouveau
    const initialState = [Array(9).fill('')]
    //Définition du state de l'historique notre application au démarrage
    const [squaresHistory, setSquaresHistory] = useState(initialState)
    //State contenant le mouvement à afficher
    const [selectedMove, setSelectedMove] = useState(0)
    //"Tranche" de notre historique à afficher
    const squares =  squaresHistory[selectedMove]
    //Ici on calcule le joueur du prochain tour en fonction du tour actuel
    //Comme sa valeur dépend de la valeur d'un state "selectedMove" elle sera recalculée à chaque fois
    // que cette dernière change.
    const player = selectedMove % 2 !== 0
    const [message, setMessage] = useState('First player : O')

    //Cette fonction sera appelée à chaque fois que l'on clique sur un component square
    //Une reference sera passée en tant que props à Square afin que ce dernier puisse s'en servir.
    const onClick = (index) => {
        //On crée une copie du tableau squares afin de pouvoir le manipuler en respectant le principe d'immutabilité
        const newSquares = squares.slice() // le résultat est equivalent à la notation [...squares]

        //On vérifie que la partie n'est pas déjà terminée et que la case cliqué est bien vide
        //Si ce n'est pas le cas la fonction s'arrête là.
        if(squares[index] !== '' || winner(squares)) {
            return
        }
        //On insère le text à afficher en fonction du joueur du tour
        if(player) {
            newSquares[index] = "X"
        } else {
            newSquares[index] = "O"
        }

        //On cherche à savoir si le clique a lieu alors qu'on se trouve dans l'historique de la partie ou pas
        if(selectedMove && selectedMove !== squaresHistory.length){
            //si oui on récupère l'historique du début de la partie jusqu'au mouvement afficher afin d'écraser
            //ce qu'il se trouve ensuite et de le remplacer par le nouveau mouvement
            const newHistory = squaresHistory.slice(0, selectedMove + 1)
            setSquaresHistory([
                ...newHistory,
                newSquares
            ])
        } else {
            //Sinon on ajoute simplement le nouveau mouvement à la suite de l'historique
            setSquaresHistory([
                ...squaresHistory,
                newSquares
            ])
        }

        //On finit par incrémenter le mouvement actuel de 1.
        setSelectedMove(selectedMove + 1)
    }

    //Un useEffect permet d'effectuer une action à un moment précis de la vie d'un component
    //(montage, démontage, changement d'état).
    //Ici l'effet sera appliqué lors du changement de la valeur de selectedMove
    useEffect(() => {
        //On applique notre fonction winner afin de savoir si un joueur à gagné
        const theWinner = winner(squares)
        //Si un joueur a gagné la fonction winner nous renverra son nom, ce qui nous permet d'afficher un message
        //de victoire.
        if(theWinner) {
            setMessage(`The winner is : ${theWinner}`)
        }
        //Sinon on cherche à savoir s'il reste des cases vides (est ce que la partie est encore en cours)
        else if(squares.includes('')) {
            setMessage(`Next player is : ${player ? 'X' : 'O'}`)
        }
        //Si aucune des autres conditions n'a été rempli cela signifie que la partie est null, on affiche
        //un message en consequence.
        else {
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