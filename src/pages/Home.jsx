import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import nodata from "../images/no-data-initial.png";

const API_KEY = "f48522d8c5c4d0987c2662fcd0672207"; //TMDB key

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`
      );
      const data = await res.json();
      if (data.results.length > 0) {
        setMovies(data.results);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found. Try a different title");
      }
    } catch (err) {
      setError(`Something went wrong. ${err}`);
      setMovies([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      searchMovies();
    }
  }

  const movieEl = movies.map((movie) => (
    <div className="movie-container" key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
      <div className="movie-description">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span>100 min</span>
          <span>Genre</span>
          <button className="movie-watchlist-btn">Watchlist</button>
        </div>
        <p className="movie-overview">{movie.overview}</p>
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
      {error && <p className="error-message">{error}</p>}
      {movies && movieEl}
      {/* <img src={nodata} alt="" className="no-data-img" /> */}
    </section>
  );
}
