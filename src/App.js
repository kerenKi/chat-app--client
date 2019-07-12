import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import Messages from './components/Messages'
import LoginContainer from './components/loginForm'
import SignupContainer from './components/Signup'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'

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
      
        
        //   <main>
        //     <Route
        //       exact
        //       path="/"
        //       render={() =>
        //         this.props.userLogedIn.jwt ? <Redirect to="/events" /> : <LoginContainer />
        //       }
        //     />
        //     <Route 
        //       exact 
        //       path="/signup" 
        //       render={() =>
        //         this.props.userLogedIn.jwt ? <Redirect to="/events" /> : <SignupContainer />
        //       }
        //     />
  
        //     <Route exact path="/events" component={EventsListContainer}/>
        //     <Route exact path="/past-events" component={PastEventsContainer}/>
        //     <Route exact path="/events/:id" component={TicketsListContainer} />
        //     <Route exact path="/tickets/:id" component={TicketDetailsContainer} />
        //     <Route exact path="/tickets/:id" component={CommentsContainer} />
        //   </main>
          
        // </div>