import request from 'superagent'

export const VERIFY_NUMBER = 'VERIFY_NUMBER';

export const verifyNumber = (userIds) => ({
  type: VERIFY_NUMBER,
  payload: userIds
})

export const sendNumber = (full_number) => (dispatch) => {
  console.log('dispatch:', full_number)
  return request
  .post('http://localhost:4000/verify')
  .send({
    email: full_number.email,
    country_code: full_number.country_code,
    phone_number: full_number.phone_number
  })
  .then(response => {
    dispatch(verifyNumber(response.body))
  })
  .catch(error => {
    console.log(error)
    if (error.status === 500) {
      return alert('There seems to be a problem with the server')
    }
    if (error.status === 400) {
      return alert("There is something wrong with your phone number")
    }
    return alert('Something went wrong, please try again')
  })
}
