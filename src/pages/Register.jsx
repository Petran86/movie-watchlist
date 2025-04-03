import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../api";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await registerUser(email, password, userName);
      setError("");
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  }

  return (
    <section className="login-section">
      <h2>Enter your credentials</h2>
      {error && <p className="login-error">There was an error! {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Peter"
          required
        />
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
          placeholder="********"
          required
        />
        <button>Create account</button>
      </form>
    </section>
  );
}
