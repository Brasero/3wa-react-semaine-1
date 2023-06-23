const initialOutgoing = {
    detail: '',
    amount: '',
    category: 'Autres'
}

const normalizeNumber = (number) => {
    return parseFloat(number.replace(',','.'))
}


export const initialState = {
    outgoings: [],
    outgoing: initialOutgoing,
    category: [
        'Alimentation',
        'Logement',
        'Transport',
        'Divertissement',
        'Santé',
        'Education',
        'Autres'
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'change_category':
            return {
                ...state,
                outgoing: {
                    ...state.outgoing,
                    category: action.payload
                }
            }

        case 'change_outgoing':
            action.payload.name === 'amount' && isNaN(normalizeNumber(action.payload.value)) && (action.payload.value = '')

            return {
                ...state,
                outgoing: {
                    ...state.outgoing,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'add_outgoing':
            const newOutgoings = [...state.outgoings]
            const outgoing = {...state.outgoing, amount: normalizeNumber(state.outgoing.amount)}
            newOutgoings.push(outgoing)
            return isNaN(outgoing.amount) || outgoing.detail === '' ? state :
             {
                ...state,
                outgoings: newOutgoings,
                outgoing: initialOutgoing
            }



        default:
            return state
    }
}

export default reducer