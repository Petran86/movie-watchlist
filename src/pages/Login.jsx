import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { loginUser } from "../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setError("");
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      setError(`Invalid email or password! ${err}`);
    }
  }

  return (
    <section className="login-section">
      <p className="login-error">{message}</p>
      {error && <p className="login-error">{error}</p>}
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="p@p.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
          required
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
