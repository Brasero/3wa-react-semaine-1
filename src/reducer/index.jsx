
export const initialState = {
    items: [
        'premier item générer'
    ],
    value: ''
}


const reducer = (state, action) => {
    switch(action.type) {

        case 'addItem':
            const items = [...state.items]
            items.push(state.value)
            return {
                value: '',
                items
            }

        case 'changeValue':
            return {
                ...state,
                value: action.payload
            }

        case 'removeItem':
            const newItems = state.items.filter((item) => item !== action.payload)

            return {
                ...state,
                items: newItems

            }

        default:
            return state
    }
}

export default reducer