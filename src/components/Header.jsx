import { NavLink, useLocation } from "react-router";

export default function Header() {
  // With useLocation() we check if the user is on the Home page
  // and dynamicly change the h1 and the NavLink
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header>
      <h1 className="page-title">
        {isHomePage ? "Find your film" : "My Watchlist"}
      </h1>
      <nav>
        <NavLink to={isHomePage ? "/mywatchlist" : "/"}>
          {isHomePage ? "My Watchlist" : "Search for movies"}
        </NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
    </header>
  );
}
