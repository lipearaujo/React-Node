import api from "./tmdAxios";
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "7008c5f17696d4e2d21a3a90d5a1422b";

//fetch data from API with axios
const apiFetch = async (endpoint) => {
  /*
  // create a promise for the axios request
  const promise = api.get(`${baseURL}${endpoint}`);

  // using .then, create a new promise which extracts the data
  const dataPromise = promise.then((response) => response.data);

  // return it
  return dataPromise; 
  */

  //The function can be written more succinctly:
  return api.get(`${baseURL}${endpoint}`).then((response) => response.data);
};

/*Another way to fetch data from API (without axios)
    const apiFetch = async (endpoint) => {
    const req = await fetch(`${baseURL}${endpoint}`);
    const json = await req.json();
    return json;
}; 
*/

export default {
  homePageList: async () => {
    return [
      {
        slug: "myList",
        title: "My List",
        moviesList: await apiFetch(
          `/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "originals",
        title: "Netflix Originals",
        moviesList: await apiFetch(
          `/discover/tv?with_network=213&api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "trending",
        title: "Trending Now ",
        moviesList: await apiFetch(
          `/trending/all/week?api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "toprated",
        title: "Popular on Netflix",
        moviesList: await apiFetch(
          `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        moviesList: await apiFetch(
          `/discover/movie?with_genres=35&with_network=213&api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "cartoons",
        title: "Cartoons",
        moviesList: await apiFetch(
          `/discover/movie?with_genres=16&with_network=213&api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "horror",
        title: "Horror ",
        moviesList: await apiFetch(
          `/discover/movie?with_genres=27&with_network=213&api_key=${apiKey}&language=en-US&page=1`
        ),
      },
      {
        slug: "action",
        title: "Action and Adventure",
        moviesList: await apiFetch(
          `/discover/movie?with_genres=28&with_network=213&api_key=${apiKey}&language=en-US&page=1`
        ),
      },
    ];
  },

  getMovieInfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case "movie":
          info = await apiFetch(`/movie/${movieID}?language=en-US&api_key=${apiKey}`);
          break;

        case "tv":
          info = await apiFetch(`/tv/${movieID}?api_key=${apiKey}&language=en-US`);
          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
