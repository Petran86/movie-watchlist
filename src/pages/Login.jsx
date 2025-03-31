import { Link } from "react-router";

export default function Login() {
  return (
    <section className="login-section">
      <h2>Log in</h2>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="p@p.com" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
        />
        <button>Log in</button>
      </form>
      <div className="login-section-register">
        <p>Don't have an account yet?</p>
        <Link to="/register">Create an account here!</Link>
      </div>
    </section>
  );
}
