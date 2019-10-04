import { combineReducers } from 'redux'
import currentUser from './currentUser'
import messages from './messages'
import userIds from './verifyPhone'

export default combineReducers ({
    messages,
    currentUser,
    userIds
})