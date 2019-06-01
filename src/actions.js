import request from 'superagent'

export function sendMessage (message, userId) {
  const body = { message }
  console.log('sent message', {message:body, userId:userId})
  request
  .post('http://localhost:4000/message')
  .send({
    message: body.message,
    userId: userId
  })
  .then()
 
  return { type: 'MESSAGE_SENT' }
}

export function loginUser (user) {

  request
  .post('http://localhost:4000/login')
  .send({
    user_name: user.user_name,
    password: user.password,
    email: user.email
  })
  .then()

  return { type: 'MESSAGE_SENT' }
}



