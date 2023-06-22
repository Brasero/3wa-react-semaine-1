const item = {
    text: '',
    color: 'palevioletred',
    size: '15px'
}

export const initialState = {
    items: [],
    item
}


const reducer = (state, action) => {
    switch(action.type) {

        case 'addItem':
            const items = [...state.items]
            items.push(state.item)
            return {
                item,
                items
            }

        case 'changeValue':
            return {
                ...state,
                item: {
                    ...state.item,
                    text: action.payload
                }
            }

        case 'changeColor':
            return {
                ...state,
                item: {
                    ...state.item,
                    color: action.payload
                }
            }

        case "changeSize":
            return {
                ...state,
                item: {
                    ...state.item,
                    size: action.payload
                }
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