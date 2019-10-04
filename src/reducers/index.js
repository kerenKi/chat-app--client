import { combineReducers } from 'redux'
import currentUser from './currentUser'
import messages from './messages'
import userId from './verifyPhone'

export default combineReducers ({
    messages,
    currentUser,
    userId
})