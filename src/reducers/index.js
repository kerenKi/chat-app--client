import { combineReducers } from 'redux'
import currentUser from './currentUser'
import messages from './messages'
import sent from './messageSent'

export default combineReducers ({
    messages,
    sent,
    currentUser
})