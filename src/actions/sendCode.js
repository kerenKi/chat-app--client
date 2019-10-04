import request from 'superagent'
import { userLogged } from './loginUser'

export const sendCode = (codeAndIds) => (dispatch) => {
  console.log('codeAndIds:', codeAndIds)
  return request
  .post('http://localhost:4000/confirm')
  .send({
    code: codeAndIds.code,
    mbId: codeAndIds.mbId,
    userId: codeAndIds.userId
  })
  .then(response => {
    console.log('confirm response', response)
    dispatch(userLogged(response.body))
  })
  .catch(error => {
    console.log(error)
    if (error.status === 500) {
      return alert('There seems to be a problem with the server')
    }
    if (error.status === 400) {
      return alert("There is something wrong with the code you entered")
    }
    return alert('Something went wrong, please try again')
  })
}
