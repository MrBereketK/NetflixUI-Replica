import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);

        const movies = response.data.results;

        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    if (!str) return "";
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
        backgroundPosition: "center top",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">▶ Play</button>
          <button className="banner_button">+ My List</button>
        </div>

        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
