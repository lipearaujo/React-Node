import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const apiKey = "7008c5f17696d4e2d21a3a90d5a1422b";
  const baseURL = "https://api.themoviedb.org/3";

  const [searchedMovie, setSearchedMovie] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const apiFetch = async (title) => {
    const req = await fetch(
      `${baseURL}/search/movie?&api_key=${apiKey}&query=${title}&language=en-US&page=1&include_adult=false`
    );
    const json = await req.json();

    console.log(json);
    setSearchedMovie(json.results);
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => apiFetch(inputValue)}>
          <SearchIcon style={{ fontSize: "1.7rem" }} />
        </button>
      </div>

      {searchedMovie.length > 0 ? (
        <div className="movies">
          {searchedMovie.map((movie, key) => (
            <MovieCard
              title={movie.original_title}
              poster={movie.poster_path}
              release={movie.release_date}
              vote={movie.vote_average}
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

export default App;
