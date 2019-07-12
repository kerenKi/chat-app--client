import { MESSAGE_SENT } from "../actions/sendMessage"

export default function sent (state= false, action) {
    switch (action.type) {
      case MESSAGE_SENT:
        return !state
      default:
        return state  
    }
  }
