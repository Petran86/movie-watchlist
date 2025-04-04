import { NavLink, useLocation } from "react-router";

export default function Header({ user, logoutUser }) {
  // With useLocation() we check if the user is on the Home page
  // and dynamicly change the h1 and the NavLink
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pageInfo = {
    "/": "Find your film",
    "/mywatchlist": "My Watchlist",
    "/login": "Login",
    "/register": "Register",
  };

  return (
    <header>
      <h1 className="page-title">{pageInfo[location.pathname]}</h1>
      <nav>
        <NavLink to={isHomePage ? "/mywatchlist" : "/"}>
          {isHomePage ? "My Watchlist" : "Search for movies"}
        </NavLink>
        {user ? (
          <button className="logout-btn" onClick={logoutUser}>
            Logout
          </button>
        ) : (
          <NavLink to="login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
