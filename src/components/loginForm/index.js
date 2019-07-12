//The container for LoginForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from './loginForm'
import { loginUser } from '../../actions/loginUser'

class LoginFormContainer extends Component {
  state = {
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

export default connect(null,{ loginUser })(LoginFormContainer);
  