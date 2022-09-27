import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster, release, vote }) => {
  const img = "https://image.tmdb.org/t/p/w400";
  return (
    <div className="moviecard">
      <img src={`${img}${poster}`} alt="poster" />
      <div className="infos">
        <h2>Title: {title}</h2>
        <h2>Release Date: {release}</h2>
        <h2>Vote: {vote}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
