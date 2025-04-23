import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  checkUserAuth,
  logoutUser,
  getWatchlist,
  updateWatchlist,
} from "../firebase";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import MyWatchlist from "./pages/MyWatchlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

export default function App() {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    checkUserAuth(async (user) => {
      setUser(user);
      if (user) {
        const userWatchlist = await getWatchlist(user.uid);
        setWatchlist(userWatchlist);
      } else {
        setWatchlist([]);
      }
    });
  }, []);

  async function addToWatchlist(movie) {
    if (!user) return;
    const updatedList = [...watchlist, movie];
    setWatchlist(updatedList);
    await updateWatchlist(user.uid, updatedList);
  }

  async function removeFromWatchlist(id) {
    if (!user) return;
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    await updateWatchlist(user.uid, updatedList);
  }

  // function addToWatchlist(movie) {
  //   //check if the id of the movie passed exists in the watchlist array
  //   //if it doesn't add the movie to the watchlist
  //   if (!watchlist.some((m) => m.id === movie.id)) {
  //     setWatchlist([...watchlist, movie]);
  //   }
  // }

  // function removeFromWatchlist(id) {
  //   //filters the watchlist and renoves the movie with id equal to the id passed
  //   setWatchlist(watchlist.filter((movie) => movie.id !== id));
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout user={user} logoutUser={logoutUser} />}
        >
          <Route index element={<Home addToWatchlist={addToWatchlist} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateRoute user={user} />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
