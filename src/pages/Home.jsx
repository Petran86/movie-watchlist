import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faStar,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
// import nodata from "../images/no-data-initial.png";

const API_KEY = "fb9e9854"; //OMDB key
const BASE_URL = "http://www.omdbapi.com/";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchMovies(search) {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: search,
          type: "movie",
        },
      });
      if (res.data.Search) {
        //Fetch additional details for each movie
        const movieDetails = await Promise.all(
          res.data.Search.map(async (movie) => {
            const detailsResponse = await axios.get(BASE_URL, {
              params: { apikey: API_KEY, i: movie.imdbID },
            });
            return {
              id: movie.imdbID,
              title: movie.Title,
              poster:
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300",
              rating: detailsResponse.data.imdbRating,
              runtime: detailsResponse.data.Runtime,
              genres: detailsResponse.data.Genre,
              plot: detailsResponse.data.Plot,
            };
          })
        );
        setMovies(movieDetails);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found. Try a different title");
      }
    } catch (err) {
      setError(`Something went wrong. ${err}`);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      searchMovies(inputValue);
    }
  }

  const movieEl = movies.map((movie) => (
    <div className="movie-container" key={movie.id}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <div className="movie-description">
        <h3 className="movie-title">
          {movie.title} <FontAwesomeIcon icon={faStar} className="star-icon" />{" "}
          <span>{movie.rating}</span>
        </h3>
        <div className="movie-details">
          <span>{movie.runtime}</span>
          <span>{movie.genres}</span>
          <button className="movie-watchlist-btn">
            <FontAwesomeIcon icon={faCirclePlus} />
            Watchlist
          </button>
        </div>
        <p className="movie-overview">{movie.plot}</p>
      </div>
    </div>
  ));

  return (
    <section className="movie-search">
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for a movie"
          />
          <button>Search</button>
        </form>
      </div>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status">{error}</p>}
      {movies && movieEl}
      {/* <img src={nodata} alt="" className="no-data-img" /> */}
    </section>
  );
}
