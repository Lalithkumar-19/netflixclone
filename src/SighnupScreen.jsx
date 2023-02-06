import React from 'react'
import "./sighnup.css";
function SighnupScreen() {
  return (
    <div className=' signupscreen'>
        <div className='main'>
        <form>
<h1> Sign in</h1>

<input placeholder='Email' type="email"/>

<input placeholder='Password' type="password"/>
<button type='submit' >Sign In</button>

</form>

        </div>

    </div>
  )
}

export default SighnupScreen