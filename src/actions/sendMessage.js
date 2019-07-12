import request from 'superagent'

export const MESSAGE_SENT = 'MESSAGE_SENT';

const messageSent = (message) => ({
  type: MESSAGE_SENT,
  payload:{
    message
  } 
})

export const sendMessage = (message) => (dispatch) => {
  const {userToken, message} = message 
  return request
  .post('http://localhost:4000/message')
  .send({
    message
  })
  .set('Authorization', `Bearer ${userToken}`)
  .then(res => {dispatch(messageSent(res.body.tickets,res.body.risks))})
  .catch(console.error)
}
