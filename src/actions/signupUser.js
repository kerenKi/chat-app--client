import request from 'superagent'

export const USER_LOGGED = 'USER_LOGGED';

const userLogged = (user) => ({
  type: USER_LOGGED,
  payload: user
})

export const signupUser = (user) => (dispatch) => {
  return request
  .post('http://localhost:4000/users')
  .send({
    user_name: user.user_name,
    password: user.password,
    email: user.email
  })
  .then(response => {
    dispatch(userLogged(response.body))
  })
  .catch(error => {
    console.log(error)
    if (error.status === 500) {
      return alert('There seems to be a problem with the server')
    }
    return alert('Something went wrong, please try again')
  })
}
