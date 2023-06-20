import Row from "../Row/index.jsx";

function Board({squares, click}) {

    return (
        <>
            <div className={'game'}>
                <Row rowNumber={0} values={squares} click={click} />
                <Row rowNumber={1} values={squares} click={click} />
                <Row rowNumber={2} values={squares} click={click} />
            </div>
        </>
    )
}

export default Board