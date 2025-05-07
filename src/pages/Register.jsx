import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../firebase";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }
    try {
      await registerUser(email, password, userName);
      setError("");
      navigate("/login");
    } catch (err) {
      setError(err);
      console.error(err);
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
        <label htmlFor="password">Password(at least 6 characters)</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />
        {error && <p>{error}</p>}
        <button>Create account</button>
      </form>
    </section>
  );
}
