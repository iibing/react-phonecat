import {RECEIVED_PHONES, RECEIVED_PHONE_DETAIL} from '../constants/ActionTypes'

const initialState = {
    phones: [],
    phone: {}
}

const phones = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_PHONES:
            return Object.assign({}, state, {phones: action.phones})
        case RECEIVED_PHONE_DETAIL:
            return Object.assign({}, state, {phone: action.phone})
        default:
            return state
    }
}

export default phones