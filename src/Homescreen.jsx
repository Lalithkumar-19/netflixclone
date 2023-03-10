import React from 'react'
import "./homesceen.css";
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import requests from './Request';
function Homescreen() {
  return (
    <div className='homescreen'>
            <Nav/>
            <Banner/> 
             <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchTrending 
                   }  isLargeRow="true"
                />
                <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}/>
                   <Row 
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}/>
                   <Row 
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}/>
                   <Row 
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}/>
                   <Row 
                title='Romantic Movies'
                fetchUrl={requests.fetchRomanceMovies}/>
                   <Row 
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default Homescreen