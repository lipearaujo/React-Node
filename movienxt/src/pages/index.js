import styles from "../styles/Home.module.css";
import MovieCard from "../components/MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Home() {
  const apiKey = "7008c5f17696d4e2d21a3a90d5a1422b";
  const baseURL = "https://api.themoviedb.org/3";

  const [searchedMovie, setSearchedMovie] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const apiFetch = async (title) => {
    const req = await fetch(
      `${baseURL}/search/movie?&api_key=${apiKey}&query=${title}&language=en-US&page=1&include_adult=false`
    );
    const json = await req.json();

    setSearchedMovie(json.results);
  };

  return (
    <div className={styles.App}>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.button} onClick={() => apiFetch(inputValue)}>
          <SearchIcon style={{ fontSize: "1.7rem" }} />
        </button>
      </div>

      {searchedMovie.length > 0 ? (
        <div className={styles.movies}>
          {searchedMovie.map((movie, key) => (
            <MovieCard
              movieID={movie.id}
              title={movie.original_title}
              poster={movie.poster_path}
              key={key}
            />
          ))}
        </div>
      ) : (
        <h1>Search for a Movie</h1>
      )}
    </div>
  );
}
