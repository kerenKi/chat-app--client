import { USER_LOGGED } from "../actions/loginUser"

export default function currentUser (state= {}, action) {
  switch (action.type) {
    case USER_LOGGED:
      return action.payload
    default:
      return state  
  }
}
