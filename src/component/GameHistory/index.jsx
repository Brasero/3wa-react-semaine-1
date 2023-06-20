
function GameHistory({history, click}) {

    return (
        <div className={'historyList'} style={{display: 'flex', flexDirection: 'column'}}>
            {
                history.map((item, key) => {
                   return (
                       <button
                           key={key}
                           onClick={() => click(key)}
                       >
                           {key === 0 ? 'Restart Game' : 'Move #' + (key)}
                       </button>
                   )
                })
            }
        </div>
    )
}

export default GameHistory