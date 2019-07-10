import React from 'react';

function LoginForm(props) {
    
    return (<div>
      <h1>LOG IN</h1>
        <form onSubmit={props.onSubmit}>
          <label>User name: </label>
          <input type="text" name="user_name" required value={props.values.user_name} onChange={props.onChange} ></input>

          <label>Password: </label>
          <input type="password" name="password" value={props.values.password} onChange={props.onChange}></input>

          <label>Email address: </label>
          <input type="email" name="email" value={props.values.email} onChange={props.onChange}></input>

          <input type="submit" value="Log in" />
        </form>
        </div>)
    }
    

    export default LoginForm;