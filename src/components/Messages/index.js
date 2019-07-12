import React from 'react';
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/sendMessage'

class Messages extends React.Component {
  state = {
    userToken: this.props.userToken,
    text: '',
  }
   
  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSend = (event) => {
    event.preventDefault()
    this.props.sendMessage(this.state)
    this.setState({
      userToken: this.props.userToken,      
      text: ''
    })
  }
  render() {

    const paragraphs = this.props.messages.map( (message) => <p key={message.id}>{message.user.user_name} says: {message.message}</p>)

    return (
      <div>
        <h1> Messages:</h1>
        {paragraphs}

        <form onSubmit={this.onSend}>
        <input 
          type='text' 
          onChange={this.onChange}
          value={this.state.text} />
        
        <button type='submit'>send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    userToken: state.currentUser.jwt
  }
}
export default connect(mapStateToProps, { sendMessage })(Messages);

