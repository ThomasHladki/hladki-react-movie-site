import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//key 6239be83
const API_URL='http://www.omdbapi.com?apikey=6239be83';
const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}


function App() {
  const [movies, setMovies]=useState([]);

  const searchMovies= async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app"> 
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search For Movies' value='Superman' 
        onChange={()=>{

        }}
        />
        <img src = {SearchIcon} alt='search' onClick={()=>{

        }}
        />
      </div>
      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
