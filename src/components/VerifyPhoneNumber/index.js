//The container for VerifyPhoneForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import VerifyPhoneForm from './VerifyPhoneForm'
import { sendNumber } from '../../actions/sendNumber'
import { sendCode } from '../../actions/sendCode'

class VerifyPhoneNumber extends Component {
  state = {
    email:'',
    country_code: '',
    phone_number: '',
    code:'',
    enableCodeButton: true
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
      code:'',
      enableCodeButton: true
    })
  }

  onSubmitCode = (event) => {
    event.preventDefault()
    console.log('code submit')
    console.log({
      code: this.state.code,
      mbId: this.props.userIds.mbId,
      userId: this.props.userIds.userId
    })
    this.props.sendCode({
      code: this.state.code,
      mbId: this.props.userIds.mbId,
      userId: this.props.userIds.userId
    })
    this.setState({
      email:'',
      country_code: '',
      phone_number: '',
      code:'',
      enableCodeButton: false
    })
  }
    render() {
        return (
            <div>
                <VerifyPhoneForm 
                  onChange={this.onChange} 
                  onSubmit={this.onSubmit} 
                  onSubmitCode={this.onSubmitCode} 
                  enableCodeButton={this.state.enableCodeButton}
                  values={this.state} 
                  userIds={this.props.userIds}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    userIds: state.userIds
  }
}

export default connect(mapStateToProps,{ sendNumber, sendCode })(VerifyPhoneNumber);