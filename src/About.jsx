import React from 'react'
import "./about.css";
function About() {
  return (
    <div className='about'>
        <h4 > Questions? Call<span>000-800-919-1694</span> </h4><br/>
       <div className='about_links'>
           <div className='list_1'>
               <li>FAQ</li>
               <li>Account</li>
               <li>Investor Relations</li>
               <li>Ways to Watch</li>
               <li>Privacy</li>
               <li>Corporate Information</li>
               <li> Speed test</li>
               <li>Only on Netflix</li>
              
       

           </div>
           <div className='list_2'>
               <li>Help Centre </li>
               <li>Media Centre </li>
               <li> Jobs</li>
               <li>Terms of use </li>
               <li> Cookie preferences</li>
               <li> Contact Us</li>
               <li> Legal Notices</li>
              

           </div>
       </div>
       <div className='select_lang'> 
    
    <select name='dropdown '>
           <option selected> English</option>
           <option>Hindi</option>
       </select>
        </div>   
        <h4>Netflix India</h4>
    </div>
  )
}

export default About;