import React, { useEffect, useState } from 'react'
import "./row.css";
import axios from"./Axios";


function Row({title,fetchUrl,isLargeRow=false}) {
const base_url="https://image.tmdb.org/t/p/original/";



const [movies,setMovies]=useState([]);

useEffect(
    ()=>{
        async function fetchdata(){
            const request= await axios.get(fetchUrl);
   setMovies(request.data.results);
   return request;
    }
    fetchdata();
},[fetchUrl]
)
console.log(movies);

  return (
    <div className='row'>
 <h2> {title}</h2>
 <div className='row_posters'>
 {movies.map(
     
     movie=>(
         
          <img  className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${
             isLargeRow?movie.poster_path:movie.backdrop_path
         }`} alt={movie.name}/>
        
 )
 
 
 )}



</div>

    </div>
  )
}

export default Row