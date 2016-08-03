import {FILTER_PHONE_BY_KEYWORD, SORT_PHONE} from '../constants/ActionTypes'

const initialState = {
    filter: '',
    sortBy: 'age'
}

const phoneFilter = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PHONE_BY_KEYWORD:
            return Object.assign({}, state, {filter: action.filter})
        case SORT_PHONE:
            return Object.assign({}, state, {sortBy: action.sortBy})
        default:
            return state
    }
}

export default phoneFilter