import React from 'react';
import {Link} from 'react-router-dom'
import VerifyPhoneNumber from '../VerifyPhoneNumber'

function LoginForm(props) {
    
    return (<div>
        <h1>LOG IN</h1>
        <div className="loginForm">
          <form onSubmit={props.onSubmit}>
          
            <label>Email address: </label>
            <input type="email" name="email" required value={props.values.email} onChange={props.onChange}></input>

            <label>Password: </label>
            <input type="password" name="password" required value={props.values.password} onChange={props.onChange}></input>

            <input type="submit" value="Log in" />
          </form>
          <p><Link to='/verifyPhone'> Forgot your password? log in with your phone</Link></p>
        </div>
        <div className="LoginLinks">
        <p> <Link className="signupLink" to='/signup'> New here? Sign up!</Link></p>
        </div>
    </div> )
    }

    export default LoginForm;