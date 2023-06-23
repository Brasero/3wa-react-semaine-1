import './item.css'

function Item({value}) {

    return (
        <>
            <li style={{
                borderBottom: '1px solid #cecece',
                marginTop: '15px',
                display: 'flex',
                gap: '50px',
                justifyContent: 'space-between'
            }}>
                <span>{value.detail}</span>
                <span>{value.amount} €</span>
                <span>{value.category}</span>
            </li>
        </>
    )
}

export default Item