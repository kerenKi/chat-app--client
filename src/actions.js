import request from 'superagent'

export function sendMessage (message) {
  const body = { message }

  request
  .post('http://localhost:4000/message')
  .send(body)
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



