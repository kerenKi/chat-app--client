import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Messages from './component/Messages'
import LoginFormContainer from './component/loginForm'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class App extends React.Component {
  
  render() {
    
    return (
      <main>
      
      <Route exact path="/" render={() => (
        this.props.currentUser.id ? 
        (<Redirect to="/message"/>)
        :
        (<LoginFormContainer/>)
        )}/>
        
        <Route exact path="/message" render={() => (
          !this.props.currentUser.id ? 
          (<Redirect to="/"/>)
          :
          (<Messages/>)
          )}/>
          
          {/* <Route exact path="/message" component={Messages} /> */}
          
          </main>
          )
        }
      }
      
      const mapStateToProps = state => ({
        currentUser: state.currentUser
      })
      
      export default withRouter(connect(mapStateToProps)(App))
      
      