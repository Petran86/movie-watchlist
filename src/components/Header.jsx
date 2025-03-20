import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-find">
        Find your film
      </Link>
      <nav>
        <NavLink to="/mywatchlist">My Watchlist</NavLink>
      </nav>
    </header>
  );
}
