import React from 'react';
import { connect } from 'react-redux'
import { sendMessage } from './actions'

class App extends React.Component {
  state = {
    message: '',
  }
   
  onChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  onSend = (event) => {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
        message: ''
    })
  }

  render() {

    const paragraphs = this.props.messages.map( (message, index) => <p key={index}>{message}</p>)

    return (
      <main>
        <h1> Messages:</h1>
        {paragraphs}

        <form onSubmit={this.onSend}>
        <input 
        type='text' 
        onChange={this.onChange}
        value={this.state.message} />
        
        <button type='submit'>send</button>
        </form>
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    sent: state.sent
  }
}
export default connect(mapStateToProps, {sendMessage})(App);
