import React from 'react'
import "./homerow.css"
function Homerow({ link,main,sub}) {
    
        
  return (
    <div className='home_row1'>
  <span>

  <h1>{main}</h1>
 <h3>{sub}</h3>
      </span> 

<img  id="tv-show" style={{backgroundImage:`url(${link})` ,backgroundRepeat:"no-repeat" ,backgroundSize:"cover"}}  src= "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"alt='tv-png' className='tv-show'/>



    </div>
  )
}

export default Homerow