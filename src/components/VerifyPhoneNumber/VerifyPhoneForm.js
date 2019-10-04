import React from 'react';

function VerifyPhoneForm(props) {
    const enableCodeButton = props.enableCodeButton
    return (<div>
        <h1>LOG IN with a code from your phone</h1>
        {!props.userIds.mbId && <div>
          <p>Provide your phone number and get an automated call with a code to verify your account</p>
          <form onSubmit={props.onSubmit} className="loginForm">

          <label>Email address: </label>
          <input type="email" name="email" required value={props.values.email} onChange={props.onChange}></input>

          <label>Country:</label>
          <br />
          <select name="country_code" value={props.values.country_code} onChange={props.onChange}>
              <option value="">Select a country code</option>
              <option value="43">Austria (+43)</option>
              <option value="32">Belgium (+32)</option>
              <option value="591">Bolivia (+591)</option>
              <option value="855">Cambodia (+855)</option>
              <option value="57">Colombia (+57)</option>
              <option value="385">Croatia (+385)</option>
              <option value="357">Cyprus (+357)</option>
              <option value="593">Ecuador (+593)</option>
              <option value="20">Egypt (+20)</option>
              <option value="251">Ethiopia (+251)</option>
              <option value="33">France (+33)</option>
              <option value="49">Germany (+49)</option>
              <option value="972">Israel (+972)</option>
              <option value="39">Italy (+39)</option>
              <option value="95">Myanmar [Burma] (+95)</option>
              <option value="31">Netherlands (+31)</option>
              <option value="51">Peru (+51)</option>
              <option value="48">Poland (+48)</option>
              <option value="40">Romania (+40)</option>
              <option value="386">Slovenia (+386)</option>
              <option value="34">Spain (+34)</option>
              <option value="66">Thailand (+66)</option>
              <option value="44">United Kingdom (+44)</option>
              <option value="1">United States (+1)</option>
              <option value="379">Vatican City (+379)</option>
              <option value="84">Vietnam (+84)</option>
          </select>
          <label>Phone number (mobile or landline):</label>
          <br />
          <input type="tel" name="phone_number" required placeholder="0123456768" value={props.values.phone_number} onChange={props.onChange}/>
          <input type="submit" value="Call me" />
        </form>
      </div> }

      {props.userIds.mbId && <div>
        <p>Please pick up the automated call, listen to the verification code and enter it in the form below.</p>
        
        <form onSubmit={props.onSubmitCode} className="loginForm">
            <div>
                <label>Code:</label>
                <br />
                <input type="text" name="code" placeholder="123456" value={props.values.code} onChange={props.onChange}/>
            </div>
            {enableCodeButton && <div>
                <input type="submit" value="Confirm" />
            </div>  
            } 
        </form>
      </div>}
    </div> )
    }

    export default VerifyPhoneForm;