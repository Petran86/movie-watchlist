import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

export default function MyWatchlist({ watchlist, removeFromWatchlist }) {
  const watchlistEl = watchlist.map((movie) => (
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
          <button
            className="movie-watchlist-btn"
            onClick={() => removeFromWatchlist(movie.id)}
          >
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="watchlist-btn-icon"
            />
            Remove
          </button>
        </div>
        <p className="movie-overview">{movie.plot}</p>
      </div>
    </div>
  ));

  return (
    <section className="movie-search">
      {watchlist.length === 0 ? (
        <div className="watchlist">
          <p className="status">Your watchlist is looking a little empty...</p>
          <Link to="/" className="watchlist-link">
            <FontAwesomeIcon icon={faCirclePlus} /> Let's add some movies!
          </Link>
        </div>
      ) : (
        watchlistEl
      )}
    </section>
  );
}
