import {createStore} from 'redux'

// Example reducer
const reducer = (state = {slideIndex: 0}, action) => {
    switch (action.type) {
        case 'NEXT_SLIDE':
            return {...state, slideIndex: state.slideIndex + 1}
        case 'PREV_SLIDE':
            return {...state, slideIndex: state.slideIndex - 1}
        default:
            return state
    }
}

// Create the store
const store = createStore(reducer)

export default store
