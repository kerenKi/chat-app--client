import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import socketset from 'socketset'

const is = x => x
const reducer = is

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : is

const socket = socketset('localhost:4000')

const middleware = applyMiddleware(socket, reduxThunk)

const enhancer = compose(middleware, devTools)

const store = createStore(reducer, enhancer)
store.dispatch({ type: 'SOCKETSET_CONNECT' })

export default store