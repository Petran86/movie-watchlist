import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import nodata from "../images/no-data-initial.png";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDg1MjJkOGM1YzRkMDk4N2MyNjYyZmNkMDY3MjIwNyIsIm5iZiI6MTc0Mjg5MTcxNi4zNzEsInN1YiI6IjY3ZTI2YWM0NDQwZjMxMWFjZTc1ZGVlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qq1Buw6cx8bgid3irjBB215w--FHPzkPz5XYFD-hsKk"; //TMDB key

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", inputValue);
  }

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
      {/* <img src={nodata} alt="" className="no-data-img" /> */}
    </section>
  );
}
