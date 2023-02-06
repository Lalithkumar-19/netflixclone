import React, { useEffect, useState } from 'react'
import "./nav.css";
import { useNavigate } from 'react-router';
function Nav() {
const navigate=useNavigate();
const [show,handleshow]=useState(false)

const transitionNavbar=()=>{
    if(window.scrollY>100){
        handleshow(true)
    }
    else{
        handleshow(false)
    }
}

useEffect(()=>{
window.addEventListener("scroll",transitionNavbar);
return()=>window.removeEventListener("scroll",transitionNavbar);
}
,[]
)

  return (
    <div className={`nav ${show&&"nav_black"}`}>
    <div className='nav_contents'>
        <img className='nav_logo' onClick={()=>navigate("/")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt='av'/>
<img  onClick={()=>navigate("/profile")} className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='nn'/>


    </div>

















    </div>
  )
}

export default Nav