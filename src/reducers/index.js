import { combineReducers } from 'redux'
import currentUser from './currentUser'
import messages from './messages'

export default combineReducers ({
    messages,
    currentUser
})