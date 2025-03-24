import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import nodata from "../images/no-data-initial.png";

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
