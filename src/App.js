import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render() {

    const paragraphs = this.props.messages.map( (message, index) => <p key={index}>{message}</p>)

    return (
      <main>
        <h1> Messages:</h1>
        {paragraphs}
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}
export default connect(mapStateToProps)(App);
