import * as types from '../constants/ActionTypes'

export const receviedPhones = phones => {
    return {type: types.RECEIVED_PHONES, phones: phones}
}

export const fetchPhoneList = () => {
    return dispatch => fetch('/api/phones').then(response => response.json()).then(phones => dispatch(receviedPhones(phones))).catch(e => console.error(e.toString()))
}

export const filterPhoneByKeyWord = filter => {
    return {type: types.FILTER_PHONE_BY_KEYWORD, filter: filter}
}

export const sortPhone = sortBy => {
    return {type: types.SORT_PHONE, sortBy: sortBy}
}

export const receviedPhoneDetail = phone => {
    return {type: types.RECEIVED_PHONE_DETAIL, phone: phone}
}

export const fetchPhoneDetail = phoneId => {
    return dispatch => fetch(`/api/phones/${phoneId}`).then(res => res.json()).then(phone => dispatch(receviedPhoneDetail(phone))).catch(e => console.error(e.toString()))
}