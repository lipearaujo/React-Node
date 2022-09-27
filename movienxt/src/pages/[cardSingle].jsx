import React from "react";
import styles from "../styles/CardSingle.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const cardSingle = () => {
  const apiKey = "7008c5f17696d4e2d21a3a90d5a1422b";
  const baseURL = "https://api.themoviedb.org/3";
  const img = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  const {id}  = router.query;
  console.log(id)

  const [selectedMovie, setSelectedMovie] = useState([]);

  const apiFetch = async (url) => {
    const req = await fetch(url);
    const json = await req.json();

    setSelectedMovie(json);
  };

  useEffect(() => {
    const movieURL = `${baseURL}/movie/${id}?api_key=${apiKey}&language=en-US`;
    console.log(movieURL);

    apiFetch(movieURL);
  }, []);

  return (
    <div className={styles.moviecard__single}>
      <img src={`${img}${selectedMovie.backdrop_path}`} alt="poster" />
      <div className={styles.infos}>
        <h2>Overview: <span>{selectedMovie.overview}</span></h2>
        <h2>Runtime: <span>{selectedMovie.runtime} minutes</span></h2>
        <h2>Release Date: <span>{selectedMovie.release_date}</span></h2>
        <h2>Vote: <span>{selectedMovie.vote_average}</span></h2>
      </div>
    </div>
  );
};

export default cardSingle;
