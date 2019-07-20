// import { userLogged } from './loginUser';
import { add } from './loginUser'

console.log(add(1,2))

test('Fake test', () => {
  expect(true).toBeTruthy()
})

// test('user info', () => {
//   const userInfo = {
//     jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE1NjMyMDI0ODUsImV4cCI6MTU2MzIxMzI4NX0.lE1_3w_t5PgwxOVWcnIHQe4tFi15iFRaJv4ny6KZq5w",
//     user_name: "bunny"
//   }
//   const user = userLogged(userInfo)
//   expect(user).toBe({
//     type: USER_LOGGED,
//     payload: {
//       jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE1NjMyMDI0ODUsImV4cCI6MTU2MzIxMzI4NX0.lE1_3w_t5PgwxOVWcnIHQe4tFi15iFRaJv4ny6KZq5w",
//       user_name: "bunny"
//     }
//   })
// })



//USER_LOGIN:
// {id(pin): 15
// user_name(pin): "bunny"
// email(pin): "bun@gmail.com"
// password(pin): "$2b$10$ofLBYb38lj/OmkfOwKA7Q.j6utmHzHrGBBxO63GyE1aNS2/5gS4Fi"}

// const pokemons = require('./pokeData')
// const {
//     calculateTotalPokemonWeight,
//     calculateAverageSpawnChance,
//     calculateTotalEggDistance,
//     getHeaviestPokemon,
//     categorizePokemonsByRarity
// } = require('./2.reduce');

// describe('Array methods: reduce:', () => {
//     test.skip('calculateTotalPokemonWeight: calculates the combined weight of all 151 pokemon', () => {
//         const totalweight = calculateTotalPokemonWeight(pokemons)
//         expect(totalweight).toBe(6938.7)
//     });