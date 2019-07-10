//The container for LoginForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from './loginForm'
import { loginUser } from '../../actions'

class LoginFormContainer extends Component {
  state = {
    user_name: '',
    password: '',
    email: '',
  }

   onChange  = (event) => {
     this.setState({
      [event.target.name] : event.target.value
     })
   }

   onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      user_name: '',
      password: '',
      email: '',
    })

   }
   
    render() {
        return (
            <div>
                <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>
            </div>
        );
    }
}


// Redux: connect to state, bind action creator
export default connect(null,{ loginUser })(LoginFormContainer);
  