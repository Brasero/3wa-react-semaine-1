
function Input({value, changeValue, name}) {


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <input type={"text"} value={value} name={name} onChange={(event) => changeValue(event)} />
        </div>
    )
}
export default Input