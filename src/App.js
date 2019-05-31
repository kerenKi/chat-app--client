import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Messages from './component/Messages'
import LoginFormContainer from './component/loginForm'

class App extends React.Component {
  // state = {
  //   message: '',
  // }
   
  // onChange = (event) => {
  //   this.setState({
  //     message: event.target.value
  //   })
  // }

  // onSend = (event) => {
  //   event.preventDefault()
  //   this.props.sendMessage(this.state.message)
  //   this.setState({
  //       message: ''
  //   })
  // }

  render() {

    // const paragraphs = this.props.messages.map( (message) => <p key={message.id}>{message.message}</p>)

    return (
      <main>
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/message" component={Messages} />
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    
  }
}
export default connect(mapStateToProps)(App);
