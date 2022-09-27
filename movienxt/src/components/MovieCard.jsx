import React from "react";
import styles from "../styles/MovieCard.module.css";
import Link from "next/link";

const MovieCard = ({ title, poster, movieID }) => {
  const img = "https://image.tmdb.org/t/p/w400";
  return (
    <div className={styles.moviecard}>
      <img src={`${img}${poster}`} alt="poster" />
      <div className={styles.infos}>
        <h2>Title: {title}</h2>
        <div className={styles.link}>
          <Link
            href={{
              pathname: movieID.toString(),
              query: { id: movieID.toString() },
            }}
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
