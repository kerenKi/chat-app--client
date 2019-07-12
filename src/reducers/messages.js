
export default function messages (state = [], action) {
  switch (action.type) {
    case 'MESSAGES':
      return action.payload
    default:
    return state
  }
}