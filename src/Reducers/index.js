import TodoReducer from './todoReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    todo : TodoReducer
})
