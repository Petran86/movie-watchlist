import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", inputValue);
  }

  return (
    <section className="movie-search">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a movie"
        />
        <button>Search</button>
      </form>
    </section>
  );
}
