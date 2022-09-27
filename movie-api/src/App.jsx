import { useEffect, useState } from "react";
import tmdbApi from "./services/tmdbApi";
import MovieRow from "./components/movieRow";
import Featured from "./components/featured";
import Header from "./components/header";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [black, setBlack] = useState(false);

  useEffect(() => {
    const load = async () => {
      let list = await tmdbApi.homePageList();
      setMovies(list);

      //featured
      let featuredMovies = list.filter((i) => i.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (featuredMovies[0].moviesList.results.length - 1)
      );

      let chosen = featuredMovies[0].moviesList.results[randomChosen];

      let chosenInfo = await tmdbApi.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    load();
  }, []);

  //scroll event listener
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlack(true);
      } else {
        setBlack(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="App">
      <Header black={black} />
      {featuredData && <Featured item={featuredData} />}

      <div className="lists">
        {movies.map((movie, key) => (
          <MovieRow
            title={movie.title}
            movieList={movie.moviesList}
            key={key}
          />
        ))}
      </div>

      <footer>
        <p>Desenvolvido por Filipe Araujo</p>
      </footer>
    </div>
  );
}

export default App;
