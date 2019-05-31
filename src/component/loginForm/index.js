import React from 'react';

class Messages extends React.Component {
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

    const paragraphs = this.props.messages.map( (message) => <p key={message.id}>{message.message}</p>)

    return (
      <div>
        <h1> Messages:</h1>
        {paragraphs}

        <form onSubmit={this.onSend}>
        <input 
        type='text' 
        onChange={this.onChange}
        value={this.state.message} />
        
        <button type='submit'>send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    sent: state.sent
  }
}
export default connect(mapStateToProps, {sendMessage})(Messages);

