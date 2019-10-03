//The container for VerifyPhoneForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import VerifyPhoneForm from './VerifyPhoneForm'
import { sendNumber } from '../../actions/sendNumber'

class VerifyPhoneNumber extends Component {
  state = {
    country_code: '',
    phone_number: '',
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
      country_code: '',
      phone_number: '',
    })

  }
    render() {
        return (
            <div>
                <VerifyPhoneForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>
            </div>
        );
    }
}

export default connect(null,{ sendNumber })(VerifyPhoneNumber);