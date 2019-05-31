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



// const POST_NEW_PRODUCT = 'POST_NEW_PRODUCT'
 
// const newProductPosted = (product) => ({
//   type: POST_NEW_PRODUCT,
//   product

// })

// export const postNewProduct = (product) => (dispatch) => {
//   if(product.title && product.price && product.email && product.phone_number) {
//     return request
//       .post(`${baseUrl}/products`)
//       .send({
//         title: product.title,
//         description: product.description,
//         picture: product.picture,
//         price: product.price,
//         email: product.email,
//         phone_number: product.phone_number,

//       })
//         .then(response => {
//           console.log('post response', response.body)
//           dispatch(newProductPosted(response.body))})
//         .catch(console.error)
//   } 
// }
