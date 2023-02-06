import React, { useState } from 'react'
import "./loginpage.css";
import Homerow from './Homerow';
import { ArrowCircleLeft} from '@mui/icons-material';
import About from './About';
import { auth } from './firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
//  import { useNavigate } from 'react-router';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



function Loginpage() {

//  const navigate=useNavigate();
  

const sighnIn=e=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password ).then(auth=>{
          if(auth){
          
            //  navigate("/");
          
             
          }
      }).catch(error=>alert("user not found",error));
  
  }


  const newUser=e=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then(auth=>{
      if(auth){
        alert("ACCOUNT CREATED SUCCESSFULLY!!");
        // navigate("/");
      }
      else{
        alert("ERROR IS OCCURED WHILE CREATING UR ACCOUNT!");
        
      }
    }
    ).catch(error=> alert("error is ",error));

  }




const[getstart,Setgetstart]=useState(true);
const [signin,setSighnin]=useState(false);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
console.log("email is ",email);
console.log("pass is ",password);






  return (
    <div className='home'>
        <div className='first_row'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/eb83fa55-ab10-476a-b103-499eb7c6e022/IN-en-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='this is iamge'/>
            <div className='logo_header'>
                <img  src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='logo'/>
                <button type='button' className='sighnin_button ' onClick={()=>setSighnin(true)} >SIghn in</button>
            </div>
            {
              signin?(
                <div className='info'>
                <span>
                <h1> Sign -In</h1>
              
                     <h2>With Email & Password</h2>
                     <h2>
                     Ready to watch? Enter your email  <br/> and password
                     </h2>
                 </span>
                 
               <div className='input_div1' >
               <input type="email" placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email} required/> 
               <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <div className='buttondiv1'>
          <span  onClick={()=>setSighnin(false)} className='back'><ArrowCircleLeft/></span>   <button className='btn-submit' type='submit' onClick={sighnIn } >Submit </button>

              </div>    
                   </div>   
  
            </div>




              ):
              (
            
           <div className='info'>
              <span>
              <h1> Unlimited movies,TV<br/>
              
               shows and more.</h1>
            
                   <h2>Watch anywhere.Cancel anytime.</h2>
                   <h2>
                   Ready to watch? Enter your email to create <br/>or restart your membership.
                   </h2>
               </span>
             <div className='input_div' >
               { getstart?( <><input type="email" onChange={(e)=>setEmail(e.target.value)}  value={email} placeholder='Email address'  required/>
                 <button className='btn-getstart' onClick={()=>Setgetstart(false)} type='button'>Get Started ! </button></>)
                 :
                   (   <>      
                    <input type="password" placeholder='Set Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/> <button className='btn-getstart' onClick={newUser}> Set password</button>
                    
                     <span onClick={()=>Setgetstart(true)} style={{color:"white" ,marginTop:"12px",cursor:"pointer"}}><ArrowBackIosNewIcon/></span>
                  </>)
               }

                 </div>   

          </div> )}
        </div>


 


<Homerow link="https://media2.giphy.com/media/FUTyhLwpYEKtuS5vAK/200w.webp?cid=ecf05e47qilor9c2anbut03yjxx2qoj3y99wksf4mbnqe938&rid=200w.webp&ct=g" main=" Enjoy on your TV." sub=" Watch on smart TVs, PlayStation, Xbox,Chromecast, Apple TV, Blu-ray players and more." />
<Homerow link="https://media1.giphy.com/media/Wr9UxNkGUlEgXKWSCG/200w.webp?cid=ecf05e47qenkydxa5qs1eb2zm1ses5kzx8jcfzttbhn8wp0y&rid=200w.webp&ct=g" main=" Download your shows to watch offline." sub="Save your favourites easily and always have something to watch. " />
<Homerow link="https://media0.giphy.com/media/VJ2YxwAch0tFrxr1mb/200w.webp?cid=ecf05e47f7d7txmzw5hkkt2yn1fyky59jkffd94lxwdgbadw&rid=200w.webp&ct=g" main=" Watch everywhere." sub=" Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
<Homerow link="https://media1.giphy.com/media/iODhGT5VnjhIuAjMTn/giphy.gif?cid=ecf05e47f7d7txmzw5hkkt2yn1fyky59jkffd94lxwdgbadw&rid=giphy.gif&ct=g" main=" Create profiles for children." sub="Send children on adventures with their favourite characters in a space made just for them—free with your membership. " />
<About/>
    </div>

  )
}

export default Loginpage;