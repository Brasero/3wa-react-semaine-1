
export const initialState = {
    prevNumber: 0,
    currentNumber: 0,
    lastAction: ''
}

let current;

function calc(state) {
    const current = parseFloat(state.currentNumber)
    const prev = parseFloat(state.prevNumber)
    return state.lastAction === '' ? current :
        state.lastAction === '+' ?
            prev + current :
            state.lastAction === '-' ?
                prev - current :
                state.lastAction === '*' ?
                    prev * current :
                    prev / current
}

const reducer = (state, action) => {
    switch(action.type) {

        case 'addition':

            current = calc(state)

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '+'
            }

        case 'soustract':
            current = calc(state)

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '-'
            }

        case 'multiply':
            current = calc(state)

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '*'
            }

        case 'divide':
            current = calc(state)

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '/'
            }

        case 'equal':
            current = calc(state)

            return {
                prevNumber: 0,
                currentNumber: current,
                lastAction: ''
            }

        case 'reset':
            return initialState

        case 'changeCurrent':
            return {
                ...state,
                currentNumber: state.currentNumber === 0 ?
                        action.payload.toString() === '.' ?
                           state.currentNumber.toString() + action.payload.toString() :
                            action.payload.toString() :
                    state.currentNumber.toString() + action.payload.toString()
            }


        default:
            return state
    }
}

export default reducer