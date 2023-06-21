
export const initialState = {
    values: {
        number1: '',
        number2: ''
    },
    message: '',
    error: '',
    count: 0,
    resultat: 0
}
const normalize = (num) => num.replace(',', '.')

const isNumerique = (values) => {
    if(isNaN(normalize(values.number1)) || isNaN(normalize(values.number2))) {
        return false
    }
    return true
}

const reducer = (state, action) => {
    switch(action.type) {

        case 'addition':
            return isNumerique(state.values) ? {
                ...state,
                error: '',
                resultat: parseFloat(normalize(state.values.number1)) + parseFloat(normalize(state.values.number2))
            } : {
                ...state,
                error: 'Merci de bien saisir des valeurs numérique.'
            }

        case 'multiply':
            return isNumerique(state.values) ? {
                ...state,
                error: '',
                resultat: parseFloat(normalize(state.values.number1)) * parseFloat(normalize(state.values.number2))
            } : {
                ...state,
                error: 'Merci de bien saisir des valeurs numérique.'
            }

        case 'reset':
            return {
                ...state,
                values: {
                    number1: '',
                    number2: ''
                },
                resultat: 0,
                message: '',
                error: ''
            }

        case 'changeValue':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'setMessage':
            return {
                ...state,
                message: action.payload,
                count: 0
            }

        case 'setCount':
            return {
                ...state,
                count: state.count + 1,
                message: ''
            }


        default:
            return state
    }
}

export default reducer