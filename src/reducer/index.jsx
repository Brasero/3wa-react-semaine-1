
export const initialState = {
    prevNumber: 0,
    currentNumber: 0,
    lastAction: ''
}

let current;

const reducer = (state, action) => {
    switch(action.type) {

        case 'addition':

            current = state.lastAction === '' ? state.currentNumber :
                state.lastAction === '+' ?
                    state.prevNumber + state.currentNumber :
                    state.prevNumber * state.currentNumber

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '+'
            }

        case 'multiply':
            current = state.lastAction === '' ? state.currentNumber :
                state.lastAction === '+' ?
                    state.prevNumber + state.currentNumber :
                    state.prevNumber * state.currentNumber

            return {
                prevNumber: current,
                currentNumber: 0,
                lastAction: '*'
            }

        case 'equal':
            current = state.lastAction === '' ? state.currentNumber :
                state.lastAction === '+' ?
                    state.prevNumber + state.currentNumber :
                    state.prevNumber * state.currentNumber

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
                currentNumber: parseInt(state.currentNumber.toString() + action.payload)
            }


        default:
            return state
    }
}

export default reducer