import { VERIFY_NUMBER } from '../actions/sendNumber'

export default function userIds (state = {}, action) {
  switch (action.type) {
    case VERIFY_NUMBER:
      return action.payload
    default:
    return state
  }
}