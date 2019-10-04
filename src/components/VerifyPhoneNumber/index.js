//The container for VerifyPhoneForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import VerifyPhoneForm from './VerifyPhoneForm'
import { sendNumber } from '../../actions/sendNumber'

class VerifyPhoneNumber extends Component {
  state = {
    email:'',
    country_code: '',
    phone_number: ''
  }

  onChange  = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.sendNumber(this.state)
    this.setState({
      email:'',
      country_code: '',
      phone_number: '',
    })
  }

  onSubmitCode = (event) => {
    event.preventDefault()
    
  }
    render() {
        return (
            <div>
                <VerifyPhoneForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state} userId={this.props.userId}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps,{ sendNumber })(VerifyPhoneNumber);