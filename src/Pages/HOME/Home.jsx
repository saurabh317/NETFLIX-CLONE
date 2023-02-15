import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Header from '../HEADER/Header';
import './Home.css';
import requests from '../../Request';
import Row from '../../Components/Row/Row';

const Home = () => {
  return (
    <div className='homeScreen'>
      <Header/>
      {/* banner */}
      <Banner/>
      {/* rows */}
      <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="TRENDING"
      fetchUrl={requests.fetchTrending}
      
     
      />
      <Row title="TOP RATED"
      fetchUrl={requests.fetchTopRated}
      
      />
      <Row title="ACTION"
      fetchUrl={requests.fetchActionMovies}
      
      />
      <Row title="COMEDY"
      fetchUrl={requests.fetchComedyMovies}
      
      />
      <Row title="HORROR"
      fetchUrl={requests.fetchHorrorMovies}
      
      />
      <Row title="ROMANCE"
      fetchUrl={requests.fetchRomanceMovies}
     
      />
      <Row title="DOCUMENTARY"
      fetchUrl={requests.fetchDocumentaries}
     
      />
      




        
    </div>
  )
}

export default Home