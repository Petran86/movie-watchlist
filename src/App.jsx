import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyWatchlist from "./pages/MyWatchlist";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movie) {
    //check if the id of the movie passed exists in the watchlist array
    //if it doesn't add the movie to the watchlist
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  }

  function removeFromWatchlist(id) {
    //filters the watchlist and renoves the movie with id equal to the id passed
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home addToWatchlist={addToWatchlist} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="mywatchlist"
            element={
              <MyWatchlist
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
