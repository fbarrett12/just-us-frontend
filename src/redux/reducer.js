// Set default state

let defaultState = {
    user: {}
}

// Reducer

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_USER' :
            
            return {
                ...state,
                user: action.payload 
            }

        case 'CLEAR_USER': 
            return {
                ...state,
                user: {}
            }

            default:
            return state
    }
}