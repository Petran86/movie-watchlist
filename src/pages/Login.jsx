import { Link } from "react-router";

export default function Login() {
  return (
    <section>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Peter" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="p@p.com" />
        <button>Log in</button>
      </form>
      <p>Don't have an account yet?</p>
      <Link to="/register">Create an account here!</Link>
    </section>
  );
}
