  /* TMDB API call
  
  const API_KEY = "f48522d8c5c4d0987c2662fcd0672207"; //TMDB key
  
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
  */
