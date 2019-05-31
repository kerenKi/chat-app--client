import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    message: '',
  }
   
  onChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {

    const paragraphs = this.props.messages.map( (message, index) => <p key={index}>{message}</p>)

    return (
      <main>
        <h1> Messages:</h1>
        {paragraphs}
        <input 
        type='text' 
        onChange={this.onChange}
        value={this.state.message} />
        
        <button>send</button>
        <pre>
        <code>{this.state.message}</code>
        </pre>
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state
  }
}
export default connect(mapStateToProps)(App);
