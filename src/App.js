import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import Messages from './components/Messages'
import LoginContainer from './components/loginForm'
import SignupContainer from './components/Signup'
import VerifyPhoneNumber from './components/VerifyPhoneNumber'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <main>
          <Route exact path="/" render={() => (
            this.props.currentUser.jwt ? 
            (<Redirect to="/message"/>)
            :
            (<LoginContainer/>)
            )}/>
            
            <Route 
            exact 
            path="/signup" 
            render={() =>
              this.props.currentUser.jwt  ? <Redirect to="/message" /> : <SignupContainer />
            }/>

            <Route exact path="/message" render={() => (
              !this.props.currentUser.jwt ? 
              (<Redirect to="/"/>)
              :
              (<Messages/>)
              )}/>

            <Route exact path="/verifyPhone" render={() => (
              !this.props.currentUser.jwt ? 
              (<VerifyPhoneNumber/>)
              :
              (<Messages/>)
              )}/>
              
            </main>
            <footer>
            <p> &copy; Created by Keren  <span>&#128519; &#127891;</span></p>
          </footer>
          </div>
          )
        }
      }
      
const mapStateToProps = state => ({
  currentUser: state.currentUser
})
      
export default withRouter(connect(mapStateToProps)(App))
      