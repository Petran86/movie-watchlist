import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Sorry, the page you were looking was not found!</h1>
      <Link to="/">Return to home</Link>
    </div>
  );
}
