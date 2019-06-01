import React from 'react';
import { Route } from 'react-router-dom'
import Messages from './component/Messages'
import LoginFormContainer from './component/loginForm'

class App extends React.Component {

  render() {

    return (
      <main>
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/message" component={Messages} />
      </main>
    )
  }
}


export default App;
