import {combineReducers} from 'redux'
import phones from './phones'
import phoneFilter from './phoneFilter'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({phones, phoneFilter, routing: routerReducer})

export default rootReducer