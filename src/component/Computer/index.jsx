import './computer.css'

function Computer({value}) {

    return (
        <div className={'computer__wrapper'}>
            <span className={'computer__value'}>
                {value}
            </span>
        </div>
    )
}

export default Computer