import request from 'superagent'

export const sendMessage = (message) => (dispatch) => {
  const { userToken, text } = message 
  return request
  .post('http://localhost:4000/message')
  .send({
    message: text
  })
  .set('Authorization', `Bearer ${userToken}`)
  .then(res => {dispatch({type: 'MESSAGE_SENT'})})
  .catch(console.error)
}
