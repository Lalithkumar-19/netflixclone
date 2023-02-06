import React from 'react'
import "./profilescreen.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { auth } from './firebase';


function Profilescreen() {
  const user=  useSelector(state=>state.user)
  console.log("user in pf is",user);
  return (
    <div class="profilescreen">
<Nav/>

<div className="profilescreen_body">
    <h2> Edit Profile</h2> 
<div className='profilescreen_info'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar '/>
    <div className="profilescreen_details">
        <h3> {user?user.email:"HELLO Guest"}</h3>
        <div className='profilescreen_plans'>
            <h3> Plans  </h3>
             
            
<button  className='sighnout_btn' onClick={()=>auth.signOut()}>Sign out</button>
        </div>
    </div>
    </div>
</div>




    </div>
  )
}

export default Profilescreen