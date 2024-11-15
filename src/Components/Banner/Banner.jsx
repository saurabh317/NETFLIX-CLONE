import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../Request";



const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await 
      axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * 
           request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const StyleCSS = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  };

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header className="banner" style={StyleCSS}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie.original_title || movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview,160)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
